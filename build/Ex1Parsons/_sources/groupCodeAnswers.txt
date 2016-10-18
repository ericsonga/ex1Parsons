..  Copyright (C)  Mark Guzdial, Barbara Ericson, Briana Morrison
    Permission is granted to copy, distribute and/or modify this document
    under the terms of the GNU Free Documentation License, Version 1.3 or
    any later version published by the Free Software Foundation; with
    Invariant Sections being Forward, Prefaces, and Contributor List,
    no Front-Cover Texts, and no Back-Cover Texts.  A copy of the license
    is included in the section entitled "GNU Free Documentation License".

.. setup for automatic question numbering.

.. 	qnum::
	:start: 1
	:prefix: 2-1-

Algorithms for Working with List Items - Answers
===================================================

Count Target Values
---------------------

One of the common things to do with a list is to count the number of times a target value appears in a list.  To do this initialize a count to zero and then loop through all the values in the list.  If the current value is equal to the target value increment the count.  Return the count.  

The code below also contains tests to make sure that the code works as intended.  For example ``countTargetValues(5, [1, 2, 3])`` should return 0 since there are no 5's in the list and ``countTargetValues(5, [5, 4, 5])`` should return 2 since there are two 5's in that list.

.. activecode:: Count_Targets

   # define the function
   def countTargetValues(target, numList):
   
       # initialize the count
       count = 0
  
       # loop through all the indices
       for index in range(len(numList)):
       
           # get the current value
           current = numList[index]
       
           # if the curent value is equal to the given target value
           if (current == target):
           
               # increment the count
               count = count + 1
               
       # return the count
       return count
       
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testTarget(self):
           self.assertEqual(countTargetValues(5, [1, 2, 3]), 0)
           self.assertEqual(countTargetValues(5, [3, 2, 5]), 1)
           self.assertEqual(countTargetValues(5, [5, 4, 5]), 2)
           self.assertEqual(countTargetValues(5, [5, 5, 5]), 3)
           
   myTests().main()
   
.. note ::
   
   You can also count the number of target items in the list between a first and last index.  Remember that the ``range(first, last)`` function actually returns the values from first to last - 1.  


The following code counts and returns the number of values in a list that are greater than or equal to a target value in the range specified by start and end (including the values at indicies start and end).  

For example ``countTargetInRange(3, 0, 1, [3, 3, 2, 6])`` should return 2 since there are 2 values that are greater than or equal to 3 from index 0 to 1.  The call ``countTargetInRange(3, 0, 3, [2, -3, 0, 1])`` should return 0 since there are no values that are greater than or equal to 3 in that list from index 0 to 3.

.. activecode:: Count_Target_In_Range

   # define the function
    def countTargetInRange(target, start, end, numList):
   
       # initialize the count
       count = 0
  
       # loop through all the values in the range
       for index in range(start, end+1):
       
           # get the current value
           current = numList[index]
       
           # if the curent value is greater than or equal to the target value
           if current == target:
           
               # increment the count
               count = count + 1
               
       # return the count
       return count
       
   from unittest.gui import TestCaseGui
       
   class myTests(TestCaseGui):

       def testTarget(self):
           self.assertEqual(countTargetInRange(3, 0, 1, [3, 3, 2, 6]), 2)
           self.assertEqual(countTargetInRange(3, 0, 3, [2, -3, 0, 1]), 0)
           self.assertEqual(countTargetInRange(3, 1, 2, [1, 2, 3]), 1)
           self.assertEqual(countTargetInRange(3, 0, 1, [1, 2, 3]), 0)
           self.assertEqual(countTargetInRange(3, 0, 2, [5, 4, 5]), 3)
           
   myTests().main()
  
   
Find the Maximum and Minimum Values
------------------------------------
    
Another common thing to do is find the maximum value in a list.  To do this create a variable to keep track of the maximum value found so far and set it to the first item in the list to start.  Then loop through all the values in the list and each time test if the current value is greater than the saved maximum value.  If it is, then set the maximum value to the current value.  Return the maximum value.

.. activecode:: Get_Max

   # define the function
   def getMaximum(numList):

       # set the maximum to the first item
       maximum = numList[0]

       # loop through all the values 
       for current in numList:

           # if num is greater than the maximum so far
           if current > maximum:

               # set the maximum to the current value
               maximum = current

       # return the maximum value 
       return maximum
       
   from unittest.gui import TestCaseGui
       
   class myTests(TestCaseGui):

       def testTarget(self):
           self.assertEqual(getMaximum([9, 3, 8]), 9)
           self.assertEqual(getMaximum([-2, -1, -3]), -1)
           self.assertEqual(getMaximum([2, 3, 5, 15]), 15)
           self.assertEqual(getMaximum([32, 64, 28]), 64)
           self.assertEqual(getMaximum([3]), 3)
           
   myTests().main()
   
The following code finds and returns the minimum value in a list. 
   
.. activecode:: Get_Min

   # define the function
   def getMinimum(numList):

       # set the minimum to the first item
       minimum = numList[0]

       # loop through all the values
       for current in numList:

           # if current is less than the minimum so far
           if current < minimum:

               # set the minimum to the current value
               minimum = current

       # return the minimum value in the list
       return minimum
       
   from unittest.gui import TestCaseGui
       
   class myTests(TestCaseGui):

       def testTarget(self):
           self.assertEqual(getMinimum([9, 3, 8]), 3)
           self.assertEqual(getMinimum([-2, -1, -3]), -3)
           self.assertEqual(getMinimum([2, 3, 5, 15]), 2)
           self.assertEqual(getMinimum([32, 64, 28]), 28)
           self.assertEqual(getMinimum([3]), 3)
           
   myTests().main()
       
   
Find the Average of a List of Values
-------------------------------------
      
Another common thing to do to a list of values is to find the average of them.  To calculate an average first create a variable to hold the sum and set it to zero.  Then loop through all the values in the list and add each one to the sum.  Remember that you can't divide by 0, so if the list is empty return 0 and otherwise return the sum divided by the number of items in the list.

.. activecode:: Get_Average

   def getAverage(numList):
   
       # initialize the sum
       sum = 0  
      
       # loop through the values
       for num in numList:  
      
           # add the value to the sum
           sum = sum + num 
    
       # prevent a divide by zero if this is called with an empty list
       if len(numList) == 0:
      	   return 0 
       else:
           return sum / len(numList)
      
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(getAverage([50,60,70]),60)
           self.assertEqual(getAverage([75,60,80,95]),77.5)
           self.assertEqual(getAverage([10,20,30,40,90]),38)
           self.assertEqual(getAverage([]),0)
           self.assertEqual(getAverage([4]),4)

   myTests().main()
   
Find the Average of Every Other Value in a List
-------------------------------------------------

The following code should find the average of every other value in a list starting with the value at index 0.  To do this first initialize a sum and count to zero. Next get a list of every other index starting at index zero. Then loop through each index in that list and add the value at each index to the sum and increment the count.  If the count is zero then return zero and otherwise return the sum divided by the count.

For example ``getAverageEveryOther([10,30,90])`` should return 50 since 10 plus 90 is 100 and 100 divided by 2 is 50, and ``getAverageEveryOther([])`` should return 0 since the count would be zero.

.. activecode:: Get_Average_Every_Other

   def getAverageEveryOther(numList):
   
       sum = 0
       count = 0
       for index in range(0,len(numList),2):
           value = numList[index]
           sum = sum + value
           count = count + 1
       if count == 0:
           return 0
       else:
           return sum / count
           
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(getAverageEveryOther([10,30,90]),50)
           self.assertEqual(getAverageEveryOther([]),0)
           self.assertEqual(getAverageEveryOther([30]),30)
           self.assertEqual(getAverageEveryOther([10,20]),10)
           self.assertEqual(getAverageEveryOther([4, 8, 4, 3]),4)

   myTests().main()
           
Find the Average of a List of Values Without the Minimum Value
------------------------------------------------------------------
   
The following code should find the average of a list of values except it should not include any of the smallest value in the list.  However, the code contains errors.  Fix the errors so that the code runs as intended.  
   
.. activecode:: Get_Average_Without_Smallest

   def getAverageExceptSmallest(numList):
   
       # set the min to the the first
       min = numList[0]
       
       # loop through all the values in the list
       for num in numList:
       
           # if num is less than min reset min
           if num < min:
               min = num;
               
       # initialize the sum and count
       sum = 0  
       count = 0
      
       # loop through all the values
       for num in numList:  
      
           # if not the min
           if num != min:
               # add the value to the sum and increment the count
               sum = sum + num 
               count = count + 1
    
       # prevent a divide by zero if this is called with an empty list
       if count == 0:
      	   return 0 
       else:
           return sum / count
      
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(getAverageExceptSmallest([20,50,60,70]),60)
           self.assertEqual(getAverageExceptSmallest([75,60,80,95,20]),77.5)
           self.assertEqual(getAverageExceptSmallest([20,95,20]),95)
           self.assertEqual(getAverageExceptSmallest([2]),0)
           self.assertEqual(getAverageExceptSmallest([2, 5]),5)
           
   myTests().main()
   

   
