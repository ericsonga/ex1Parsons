.. qnum::
   :prefix: 1-1-
   :start: 1
   
Pretest Answers
-------------------------------------

Please answer the following questions to the best of your ability.  Click the "Start" button when you are ready to begin the exam.   Click on the "Finish Exam" button at the end only when you are done.  You will have 30 minutes to finish as much as you can.

.. timed:: pretest
       
    .. mchoice:: pt1
       :answer_a: I.
       :answer_b: II.
       :answer_c: III.
       :answer_d: IV.
       :answer_e: V.
       :correct: b
       :feedback_a: What happens if the last two values are in ascending order, but other values are not?
       :feedback_b: This only returns false when it finds list values that are not sorted in ascending order.
       :feedback_c: When does this return true?
       :feedback_d: This returns true when at least one list value is greater than the next one (next highest index) does that mean that the list is sorted in ascending order?
       :feedback_e: This returns true when at least one list value is greater than the next one (next highest index) does that mean that the list is sorted in ascending order?

       The following function “isSorted” should only return true if values in numlist are sorted in ascending order (from left to right from smallest value to largest). Otherwise, the function should return false.  Which of the following can be used for the "missing code" to make the function work correctly?
       
       ::
          
           def isSorted(numList):
           
               // missing code

               
           I.
               b = True
      	       for i in range(len(numList) - 1):
                   if numList[i] > numList[i+1]:
                       b = False
                   else:
                       b = True
               return b
               
          II.
              for i in range(len(numList) - 1):
                  if numList[i] > numList[i+1]:
                      return False
              return True
              
          III.
              b = False
              for i in range(len(numList) - 1):
                  if numList[i] > numList[i+1]:
                      b = False
              return b
              
          IV. 
              b = False
              for i in range(len(numList) - 1):
                  if numList[i] > numList[i+1]:
                      b = True
              return b	
		      
          V.  
              for i in range(len(numList) - 1):
                  if numList[i] > numList[i+1]:
                      return True
              return False
		      

    .. mchoice:: pt2
       :answer_a: 0
       :answer_b: 1
       :answer_c: 2
       :answer_d: 3
       :correct: c
       :feedback_a: While i is set to 0 initially, it does change.
       :feedback_b: This would be true if i was incremented after the sum was changed instead of before.
       :feedback_c: This will loop twice and increment i each time so i will be 2.
       :feedback_d: This would be true if it was asking the value of limit.

       What is the value of i after the following code has executed?
       
       ::
               
           x = [2, 1, 4, 5, 7]
           limit = 3
           i = 0
           sum = 0
           while sum < limit and i < len(x):
               i = i + 1
               sum = sum + x[i]
               
    .. mchoice:: pt3
       :answer_a: var1 = 0, var2 = 2
       :answer_b: var1 = 1, var2 = 1
       :answer_c: var1 = 3, var2 = -1
       :answer_d: var1 = 2, var2 = 0
       :answer_e: The loop won't finish executing because of a division by zero.
       :correct: d
       :feedback_a: This would be true if the body of the while loop never executed. This would have happened if the while check was if var1 != 0 instead of var2 != 0
       :feedback_b: This would be true if the body of the while loop only executed one time, but it executes twice.
       :feedback_c: This would be true if the body of the while loop executed 3 times, but it executes twice.
       :feedback_d: This loop executes two times.  
       :feedback_e: 0/2 won't cause a division by zero. The result is just zero.

       What are the values of var1 and var2 after the following code segment is executed and the while loop finishes?

       ::
               
           var1 = 0
           var2 = 2
           while var2 != 0 and var1 / var2 >= 0: 
               var1 = var1 + 1
               var2 = var2 - 1
               
* Code Fixing Problem*
    
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
       if count >= 0:

           # calculate and print the average
           ave = sumRain / count
           print(Average",ave)
  
       # otherwise 
       else:
      
           # print no rain
           print"No rain")
           
*Code Writing Problem*

Complete the ``isLevelTrailSegment(elevationList,start,end)`` function which returns true when the trail segment is level and false otherwise.
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

.. activecode:: Is_level

   # define the isLevelTrailSegment that takes a list of elevations, 
   # the starting index, and the ending index and returns true if the 
   # difference between the minimum and maximum elevations values between
   # the start index and end index inclusive is less than or equal to 10, 
   # otherwise it returns false.
   def isLevelTrailSegment(elevationList,start,end):
       min = elevationList[0]
       max = elevationList[0]
       for value in elevationList:
           if (value < min):
               min = value
           if (value > max):
               max = value
       return (max - min) <= 10

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           elList = [100, 150, 105, 120, 90, 80, 50, 75, 75, 70, 80, 90, 100]
           self.assertEqual(isLevelTrailSegment(elList,7,10),True,"The trail from marker 7 to 10 should be level")
           self.assertEqual(isLevelTrailSegment(elList,2,12),False,"The trail from marker 7 to 10 should not be level")
           
   myTests().main()
   
*Code Ordering Problem (Mixed Up Code)*
   
.. parsonsprob:: longestRun
   
   Construct a function by dragging the blocks from the left side to the right side 
   -----
   def getIndexOfLongestRun(numList):
   =====
       int currentLen = 0;
       int maxLen = 0;
       int maxStart = -1;
   =====
       for index in range(len(numList)-1):
   =====
           if numList[index] == numList[index+1]:
               currentLen = currentLen + 1
   =====
               if currentLen > maxLen:
   =====
                   maxLen = currentLen
                   maxStart = i - currentLen + 1;
   =====
               else
                   currentLen = 0;
   =====  
       return maxStart;
   ===== 
       for index in range(len(numList)): #distractor
   

      
               

           
           



    