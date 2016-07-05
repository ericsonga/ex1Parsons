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
	:prefix: 4-4-
	
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

Example 4: Get Minimum Value in Range
---------------------------------------
      
To find the minimum value in a list of numbers between a start and end index, including the values at both the start and end indices, first sent the current minimum to the value at the start index.  Then loop from the start index to the end index (inclusive) and if the value at that index is less than the current minimum reset the current minimum to that value.  Return the minimum value found.

Examples
========

For example ``getMinInRange([-3,5,8,4],1,3)`` should return 4 and ``getMinInRange([20, 10, 5],0,2)`` should return 5.  

Run Code
=========

Click the |runbutton| button to run the tests that check that this code is working correctly.  All tests should print |pass| since this is correct code.  Scroll down to try to solve the practice problem below.

.. activecode:: Get_Min_In_Range

   def getMinInRange(numList, start, end):
   
       # set the current minimum to the one at the start index
       min = numList[start]
       
       # loop from start to end (inclusive)
       for index in range(start,end+1):
      
           # get the current value
           value = numList[index]
       
           # if the current value is less than the current minimum
           if value < min:
           
               # save the new current minimum
               min = value
               
       # return the minimum value found
       return min
       
   ====
      
   # code to test the isSorted function
   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(getMinInRange([-3,5,8,4],1,3),4,"Test of getMinInRange([0,5,8,4],1,3)")
           self.assertEqual(getMinInRange([20, 10, 5],0,2),5,"Test of getMinInRange([20, 10, 5],0,2)")
           self.assertEqual(getMinInRange([20, 10, 5],0,1),10,"Test of getMinInRange([20, 10, 5],0,1)")
           self.assertEqual(getMinInRange([20, 10, 5],1,2),5,"Test of getMinInRange([20, 10, 5],1,2)")
           self.assertEqual(getMinInRange([-20, -10, -5],1,2),-10,"Test of getMinInRange([-20, -10, -5],1,2)")

   myTests().main()
   
Practice 4: Get Sum In Range
------------------------------

The following code should get the sum of all the values between a specified start and end index (inclusive).  To do this create a variable to keep track of the sum and initialize it to 0.  Then loop from the start index to the end index (inclusive).  Get the value at the current index and add it to the sum.  Return the sum.

Examples
=========

For example ``getSumInRange([-3,5,2,4],1,3)`` should return 11 and ``getSumInRange([-3,5,2,4],0,1)`` should be 2.

Order Code Here
================

Put the code into the correct order with the correct indention so that it prints "Perfect" below the code when you click the |checkme| button.

Click on the |start| button below when you are ready to try to order this code.  You will have up to 10 minutes to try to solve it.  Click on the |finish| button when you have solved this problem or wish to move on without solving it.

.. timed:: get_sum_in_range_order_timed
   :timelimit: 10
   :noresult:
   :nofeedback:
   :fullwidth:
    
   .. parsonsprob:: Get_Sum_In_Range_Order

      The code is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  To indent just drag the block further to the right. Click the "Check Me" button to see if your solution is correct. 
      -----
      def getSumInRange(numList, start, end):
      =====
          sum = 0
      =====
          for index in range(start, end+1):
      =====
          for index in range(start, end) #paired
      =====
              value = numList[index]
      =====
              value = index #paired
      =====
              sum = sum + value
      =====
              sum = sum + index #paired
      =====
          return sum
      =====
          return index #paired
		   
When you are finished with this problem, or are ready to move on, click the |finish| button and then go to the next page by clicking the right arrow |right| near the bottom right of this page.    
