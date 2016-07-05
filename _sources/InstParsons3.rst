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
	:prefix: 4-3-
	
.. |runbutton| image:: Figures/run-button.png
    :height: 20px
    :align: top
    :alt: run button
    
.. |pass| image:: Figures/pass.png
    :height: 20px
    :align: top
    :alt: pass
    
.. |checkme| image:: Figures/checkMe.png
    :height: 20px
    :align: top
    :alt: check me
    
.. |start| image:: Figures/start.png
    :height: 24px
    :align: top
    :alt: start
    
.. |finish| image:: Figures/finishExam.png
    :height: 24px
    :align: top
    :alt: finishExam
    
.. |right| image:: Figures/rightArrow.png
    :height: 24px
    :align: top
    :alt: right arrow for next page

Example 3: Find the Average of a List of Values
-------------------------------------------------
      
Another common thing to do with a list of values is find the average.  To do this create a variable to hold the sum and set it to 0 initially.  Then loop through all the indices in the list and add the value at the current index to the sum.  Remember that you can't divide by 0, so if the length of the list is 0 then return 0, otherwise return the sum divided by the number of items in the list (the length of the list).

Examples
========

For example ``getAverage([50,60,70])`` should return 60 and ``getAverage([])`` should return 0.

Run Code
=========

Click the |runbutton| button to run the tests that check that this code is working correctly.  All tests should print |pass| since this is correct code.  Scroll down to try to solve the practice problem below.

.. activecode:: Get_Average

   def getAverage(numList):
   
       # initialize the sum 
       sum = 0  
      
       # loop through the valid indicies
       for index in range(len(numList)):
      
           # add the value to the sum
           sum = sum + numList[index]
    
       # prevent a divide by zero
       if len(numList) == 0:
      	   return 0 
      	   
       # return the sum divided by the count of values
       return sum / len(numList)
           
   =====
      
   # code to test the getAverage function
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(getAverage([50,60,70]),60.0, "Test of getAverage[50,60,70])");
           self.assertEqual(getAverage([]),0, "Test of getAverage([])");
           self.assertEqual(getAverage([75,60,80,95]),77.5, "Test of getAverage([75,60,80,95])");
           self.assertEqual(getAverage([10,20,30,40,90]),38.0, "Test of getAverage([10,20,30,40,90])");
           self.assertEqual(getAverage([4]),4.0, "Test of getAverage([4])");

   myTests().main()
   
Practice 3: Find the Average Dropping the Lowest Value
-----------------------------------------------------------

The following code should find the average of a list of numbers except for the lowest value, but it is mixed up and contains extra blocks not needed in a correct solution.  To find the average of all but the lowest value first check if the length of the list is less than or equal to one and if so return 0.  Otherwise create a variable to hold the sum and initialize it to 0. Create another variable to hold the lowest value found so far and set it to the first value in the list. Next loop through all the indices in the list and add the value at the current index to the sum.  Also check if the current value is less than the saved lowest value found so far and if it is set the lowest value to the current value.  Return the sum minus the lowest value divided by the number of values in the list minus one.


Examples
========

For example ``getAverageDropLowest([50,10,50])`` should return 50 since dropping the lowest value (10) results in a sum of 100 and dividing 100 by 2 yields 50.  The call ``getAverageDropLowest([10])`` should return 0 since there is only one value in the list.  

Order Code Here
================

Put the code into the correct order with the correct indention so that it prints "Perfect" below the code when you click the |checkme| button.

Click on the |start| button below when you are ready to try to order this code.  You will have up to 10 minutes to try to solve it.  Click on the |finish| button when you have solved this problem or wish to move on without solving it.

.. timed:: get_avg_drop_lowest_order_timed
   :timelimit: 10
   :noresult:
   :nofeedback:
   :fullwidth:

   .. parsonsprob:: Get_Avg_Drop_Lowest_Order
      :order: 1,8,7,3,2,6,11,4,5,0,10,9

      The code is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  To indent just drag the block further to the right. Click the "Check Me" button to see if your solution is correct. 
      -----	   
      def getAverageDropLowest(numList):
          if len(numList) <= 1:
      =====
              return 0
      =====
          sum = 0
          lowest = numList[0]
      =====
          sum = 0
          lowest = 0 #paired
      =====
          for index in range(0,len(numList)):
      =====
          for index in range(0,numList): #paired
      =====
              value = numList[index]
              sum = sum + value
      =====
              if value < lowest:
      =====
              if lowest < value: #paired
      =====
                  lowest = value
      =====
                  value = lowest #paired
      =====
          return (sum - lowest) / (len(numList) - 1))

When you are finished with this problem, or are ready to move on, click the |finish| button and then go to the next page by clicking the right arrow |right| near the bottom right of this page.    
