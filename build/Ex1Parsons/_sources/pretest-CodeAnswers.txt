.. qnum::
   :prefix: 1-1-
   :start: 1
   
Pretest Code Answers
-----------------------


Fix Code Problem
=====================
    
In the following problem you have a list that contains the amount of rainfall for each day, collected by a meteorologist.  Her rain gathering equipment occasionally makes a mistake and reports a negative amount for that day.  Fix the code below to calculate the total rainfall by adding up all the positive integers (including 0), also count the number of positive integers, and print out the average rainfall at the end.  Only print the average if there was at least one reported positive integer in the list (or at least one 0), otherwise print "No rain".

The code below is trying to calculate the average rainfall, but it contains errors.  Fix the errors so that all the tests pass.  
               
.. activecode:: Rainfall_fix

   def getAverageRainfall(rain):
   
       # initialize the variables
       sumRain = 0
       count = 0
  
       # loop through the values in the list
       for day in rain:
           
           # if the value of day is not negative
           if day >= 0:
   
               # add the value of day to the sum and increment the count
               sumRain = sumRain + day
               count = count + 1
  
       # if count is positive
       if count > 0:

           # calculate and print the average
           ave = sumRain / count
           return ave
  
       # otherwise 
       else:
      
           # return 0
           return 0
           
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testTarget(self):
           self.assertEqual(getAverageRainfall([1, 2, -3, 3]), 2)
           self.assertEqual(getAverageRainfall([-1, 2, 1, 3]), 2)
           self.assertEqual(getAverageRainfall([-1, -2, -1, -3]), 0)
           self.assertEqual(getAverageRainfall([-1, -2, 17, 13]), 15)
           self.assertEqual(getAverageRainfall([-1, 3, 17, 13, -2, 7]), 10)
           
   myTests().main()
           
Write Code Problem
======================

Write the ``isLevelTrailSegment(elevationList,start,end)`` function which returns true when the trail segment is level and false otherwise.
A trail segment is defined by a starting marker, an ending marker, and all markers between those two markers. The parameters of the method are the list of elevations at the markers, the index
of the starting marker, and the index of the ending marker. The method will return true if the difference
between the maximum elevation and the minimum elevation in the trail segment is less than or equal to
10 meters.

For the trail shown in Figure 1 below, the trail segment starting at marker 7 and ending at
marker 10 has elevations ranging between 70 and 80 meters. Because the difference between 80 and 70 is
equal to 10, the trail segment is considered level.
The trail segment starting at marker 2 and ending at marker 12 has elevations ranging between 50 and
120 meters. Because the difference between 120 and 50 is greater than 10, this trail segment is not considered level.

.. figure:: Figures/trailMarkers.png
    :width: 500px
    :align: center
    :figclass: align-center

    Figure 1: The trail elevation as a graph and as a table
    
Write the ``isLevelTrailSegment(elevationList,start,end)`` function so that the code compiles and passes all tests when you click the "Run" button.

.. activecode:: Is_level

   # define the isLevelTrailSegment that takes a list of elevations, 
   # the starting index, and the ending index and returns true if the 
   # difference between the minimum and maximum elevations values between
   # the start index and end index inclusive is less than or equal to 10, 
   # otherwise it returns false.
   def isLevelTrailSegment(elList,start,end):
       min = elList[start]
       max = elList[end]
       for index in range(start, end+1):
           value = elList[index]
           if value < min:
               min = value
           if value > max:
               max = value
       return (max - min) <= 10

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           elevList = [100, 150, 105, 95, 95, 90, 50, 75, 75, 70, 80, 90, 100]
           self.assertEqual(isLevelTrailSegment(elevList,7,9),True,"The trail from marker 7 to 9 should be level")
           self.assertEqual(isLevelTrailSegment(elevList,7,10),True,"The trail from marker 7 to 10 should be level")
           self.assertEqual(isLevelTrailSegment(elevList,2,12),False,"The trail from marker 2 to 12 should not be level")
           self.assertEqual(isLevelTrailSegment(elevList,9,11),False,"The trail from marker 9 to 11 should not be level")
           
   myTests().main()
   
Order Code Problem (Mixed Up Code)
=======================================
   
.. activecode:: longestRun

   def getIndexOfLongestRun(numList):

       currentLen = 0
       maxLen = 0
       maxStart = -1

       for index in range(len(numList)-1):

           if numList[index] == numList[index+1]:

               currentLen = currentLen + 1
     
               if currentLen > maxLen:

                   maxLen = currentLen
                   maxStart = index - currentLen + 1;

           else:

               currentLen = 0;

       return maxStart
       
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           numList = [1,5,5,4,3,1,2,2,2,2,6,1,3,3,5,5,5,5]
           self.assertEqual(getIndexOfLongestRun(numList),6)
           numList = [1,5,4,3,1,2,6,1,3,4,3,5]
           self.assertEqual(getIndexOfLongestRun(numList),-1)
           
   myTests().main()

      
               

           
           



    