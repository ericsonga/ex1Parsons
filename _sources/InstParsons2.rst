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
	:prefix: 4-2-
	
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

Example 2: Find the Maximum Value
----------------------------------
    
Another common thing to do is find the maximum value in a list.  To do this create a variable to keep track of the maximum value found so far and set it to the first item in the list to start.  Then loop through all the values in the list and each time test if the current value is greater than the saved maximum value.  If it is, then set the maximum value to the current value.  Return the maximum value.

Examples
========

For example ``getMaximum([9, 3, 8])`` should return 9 and ``getMaximum([-2, -1, -3]), -1)`` should return -1.

Run Code
=========

Click the |runbutton| button to run the tests that check that this code is working correctly.  All tests should print |pass| since this is correct code.   Scroll down to try to solve the practice problem below.

.. activecode:: Get_Max

   # define the function
   def getMaximum(numList):

       # set the maximum to the first item
       maximum = numList[0]

       # loop through all the values 
       for current in numList:

           # if current is greater than the maximum so far
           if current > maximum:

               # set the maximum to the current value
               maximum = current

       # return the maximum value 
       return maximum
       
   ====
    
   # code to test the getMaximum function
   from unittest.gui import TestCaseGui
       
   class myTests(TestCaseGui):

       def testTarget(self):
           self.assertEqual(getMaximum([9, 3, 8]), 9, "Test of getMaximum([9, 3, 8])");
           self.assertEqual(getMaximum([-2, -1, -3]), -1, "Test of getMaximum([-2, -1, -3])");
           self.assertEqual(getMaximum([2, 3, 5, 15]), 15, "Test of getMaximum([2, 3, 5, 15])");
           self.assertEqual(getMaximum([32, 64, 28]), 64, "Test of getMaximum([32, 64, 28])");
           self.assertEqual(getMaximum([3]), 3, "Test of getMaximum([3])");
           
   myTests().main()
   
Practice 2: Find the Minimum Value
------------------------------------
   
The following code should find and return the minimum value in a list, but it contains errors.  To find the minimum value, create a variable to keep track of the minimum value found so far and set it to the first item in the list to start.  Then loop through all the values in the list and each time test if the current value is less than the saved minimum value.  If it is, then set the minimum value to the current value.  Return the minimum value.

.. note ::
   
    Remember that you should set the minimum value found so far to the first value in the list, rather than set it to 0. The list may not include a 0 so this wouldn't be the minimum value in the list.
    
Examples
=========

For example ``getMinimum([9, 3, 8])`` should return 3 and ``getMinimum([-2, -1, -3])`` should return -3.

Order Code Here
================

Put the code into the correct order with the correct indention so that it prints "Perfect" below the code when you click the |checkme| button.

Click on the |start| button below when you are ready to try to order this code.  You will have up to 10 minutes to try to solve it.  Click on the |finish| button when you have solved this problem or wish to move on without solving it.

.. timed:: get_min_order_timed
   :timelimit: 10
   :noresult:
   :nofeedback:
   :fullwidth:
  
   .. parsonsprob:: Get_Min_Order
      :order: 7,6,9,8,1,0,10,2,3,4,5
      
      The code below is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  To indent just drag the block further to the right. Click the "Check Me" button to see if your solution is correct. 
      -----
      def getMinimum(numList):
      =====
      def getMinimum(numList: #paired
      =====
          minimum = numList[0]
      =====
          minimum = 0 #paired
      =====
          for current in numList:
	  =====
          for current in numlist: #paired
	  =====
              if current < minimum:
	  =====
	          if current > minimum: #paired
	  =====
                  minimum = current
	  =====
                  min = current #paired
	  =====
          return minimum

When you are finished with this problem, or are ready to move on, click the |finish| button and then go to the next page by clicking the right arrow |right| near the bottom right of this page.    
