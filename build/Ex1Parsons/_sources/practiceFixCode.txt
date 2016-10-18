.. qnum::
   :prefix: 1-2-
   :start: 1
   
.. |runbutton| image:: Figures/run-button.png
    :height: 20px
    :align: top
    :alt: run button
    
.. |pass| image:: Figures/pass.png
    :height: 20px
    :align: top
    :alt: pass
    
.. |fail| image:: Figures/fail.png
    :height: 20px
    :align: top
    :alt: fail
    
.. |start| image:: Figures/start.png
    :height: 24px
    :align: top
    :alt: start
    
.. |right| image:: Figures/rightArrow.png
    :height: 24px
    :align: top
    :alt: right arrow for next page
    
.. |finish| image:: Figures/finishExam.png
    :height: 24px
    :align: top
    :alt: finishExam

Fix Code Practice Problem
--------------------------
  
The code below is attempting to calculate the sum of a list of numbers, but has errors.   To calculate the sum initialize the sum to zero and then loop through all values in the list and add each one to the sum.  Return the sum.  

Examples
=========
   
For example, the call ``getSum([0, 1])`` should return ``1`` since ``0 + 1 = 1``.  The call ``getSum([1, 2, 3])`` should return ``6`` since ``1 + 2 + 3 = 6``.  

Fix Code Here
==============

Fix the errors in the code below until the code compiles and all the tests print |pass| instead of |fail| when you press the |runbutton| button.  The error messages and test results are displayed below the code.

.. note::

   Since this is just practice, I will help you solve this problem.  After you click on the |start| button below you can click the |runbutton| button to see the error messages.  The first reported error is on line 7 since it is missing a ``:`` at the end of ``for num in numList``.  Another syntax error is that line 10 should be indented under the comment above it (should be inside the for loop).  The next syntax error is on line 13 since ``Sum`` should be ``sum`` (case matters in Python).  A logic error is on line 4 since ``sum`` was initialized to 1 instead of 0.  Fix these errors and click the |runbutton| button to see the test results.
   
   
Click on the |start| button below when you are ready to try to fix this code.  You will have up to 5 minutes to try to solve it.  Click on the |runbutton| button to run and test the code.   Click on the |finish| button when you have solved this problem or wish to move on without solving it.

.. timed:: practice_sum_fix_timed
   :timelimit: 5
   :noresult:
   :nofeedback:
   :fullwidth:
         
   .. activecode:: Practice_Sum_Fix
   
      def getSum(numList):
      
          # initialize the sum
          sum = 1
                 
          # loop through the values in the list
          for num in numList
          
          # add each value to the sum
          sum = sum + num
          
          # return the sum
          return Sum
          
      ====
	   
      # code to test the getSum function
      from unittest.gui import TestCaseGui
	  
      class myTests(TestCaseGui):
      
          def testTarget(self):
              self.assertEqual(getSum([0, 1]), 1, "Test of getSum([0, 1])")
              self.assertEqual(getSum([-1, 1, 3]), 3, "Test of getSum([-1, 1, 3])")
              self.assertEqual(getSum([1, 2, 3]), 6, "Test of getSum([1, 2, 3])")    
		   
      myTests().main()
  
When you are finished with this problem, or are ready to move on, click the |finish| button and then go to the next page by clicking the right arrow |right| near the bottom right of this page.    

