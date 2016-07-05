.. qnum::
   :prefix: 1-3-
   :start: 1
   
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


Order Code Practice Problem
----------------------------

Construct a function ``getSum(numList)`` that takes a list of numbers and returns the sum of the values in the list. To calculate the sum initialize the sum to zero and then loop through all values in the list and add each one to the sum. Return the sum.

Examples
=========

The call ``getSum([0, 1])`` should return 1 since ``0 + 1 = 1``.  The call ``getSum([1, 2, 3])`` should return 6 since ``1 + 2 + 3 = 6``.

Order Code Here
================

.. note::

    Since this is just practice I will help you solve this problem.  After you click on the |start| button below you can use the code below to help you figure out the correct order of the code blocks and the correct indention.  The code blocks below include two extra blocks, ``for num in numList`` and ``return Sum``, that are not needed in the correct solution. 

.. code-block:: python

   def getSum(numList):
       sum = 0
       for num in numList:
           sum = sum + num
       return sum
       
Click on the |start| button below when you are ready to try to order this code.  You will have up to 5 minutes to try to solve it.  Click on the |finish| button when you have solved this problem or wish to move on without solving it.
 
.. timed:: practice_sum_order_timed
   :timelimit: 5
   :noresult:
   :nofeedback:
   :fullwidth:
   
   .. parsonsprob:: Sum_Order
      :order: 4, 6, 5, 2, 3, 1, 0
   
      The code below is mixed up and contains extra blocks that are not needed.  Drag the needed code from the left to the right and put them in order with the correct indention so that the code would work correctly.  To indent just drag the block further to the right. Click the "Check Me" button to see if your solution is correct. 
      -----
      def getSum(numList):
      =====
	      sum = 0
	  =====
	      for num in numList:
	  =====
		  for num in numList #paired
	  =====
	          sum = sum + num
	  =====
	      return sum
	  =====
	      return Sum #paired

When you are finished with this problem, or are ready to move on, click the |finish| button and then go to the next page by clicking the right arrow |right| near the bottom right of this page.    
          

           
           



    