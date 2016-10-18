function RunestoneBase () {   // Basic parent stuff

}

RunestoneBase.prototype.logBookEvent = function (eventInfo) {
    eventInfo.course = eBookConfig.course;
    if (eBookConfig.useRunestoneServices && eBookConfig.logLevel > 0) {
        jQuery.get(eBookConfig.ajaxURL + 'hsblog', eventInfo); // Log the run event
    }
    console.log("logging event " + JSON.stringify(eventInfo));
};

RunestoneBase.prototype.logRunEvent = function (eventInfo) {
    eventInfo.course = eBookConfig.course;
    if ( this.forceSave || (! 'to_save' in eventInfo) ) {
        eventInfo.save_code = "True"
    }
    if (eBookConfig.useRunestoneServices && eBookConfig.logLevel > 0) {
        jQuery.post(eBookConfig.ajaxURL + 'runlog', eventInfo) // Log the run event
            .done((function() {this.forceSave = false; }).bind(this))
            .fail((function() {alert("WARNING:  Your code was not saved!  Please Try again.");
                this.forceSave = true; }).bind(this))
    }
    console.log("running " + JSON.stringify(eventInfo));
};

/* Checking/loading from storage */

RunestoneBase.prototype.checkServer = function (eventInfo) {
    // Check if the server has stored answer
    if (this.useRunestoneServices) {
        var data = {};
        data.div_id = this.divid;
        data.course = eBookConfig.course;
        data.event = eventInfo;
        jQuery.getJSON(eBookConfig.ajaxURL + "getAssessResults", data, this.repopulateFromStorage.bind(this)).error(this.checkLocalStorage.bind(this));
    } else {
        this.checkLocalStorage();   // just go right to local storage
    }
};

RunestoneBase.prototype.repopulateFromStorage = function (data, status, whatever) {
    // decide whether to use the server's answer (if there is one) or to load from storage
    if (data !== null && this.shouldUseServer(data)) {
        this.restoreAnswers(data);
        this.setLocalStorage(data);
    } else {
        this.checkLocalStorage();
    }
};

RunestoneBase.prototype.shouldUseServer = function (data) {
    // returns true if server data is more recent than local storage or if server storage is correct
    if (data.correct == "T" || localStorage.length === 0)
        return true;
    var ex = localStorage.getItem(eBookConfig.email + ":" + this.divid + "-given");
    if (ex === null)
        return true;
    var storedData;
    try {
        storedData = JSON.parse(ex);
    } catch (err){
        // error while parsing; likely due to bad value stored in storage
        console.log(err.message);
        localStorage.removeItem(eBookConfig.email + ":" + this.divid + "-given");
        // definitely don't want to use local storage here
        return true;
    }
    if (data.answer == storedData.answer)
        return true;
    var storageDate = new Date(storedData.timestamp);
    var serverDate = new Date(data.timestamp);
    if (serverDate < storageDate)
        return false;
    return true;
};
