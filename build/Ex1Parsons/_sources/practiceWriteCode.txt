.. qnum::
   :prefix: 1-4-
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
    
.. |finish| image:: Figures/finishExam.png
    :height: 24px
    :align: top
    :alt: finishExam
    
.. |right| image:: Figures/rightArrow.png
    :height: 24px
    :align: top
    :alt: right arrow for next page
           
Write Code Practice Problem
----------------------------

Finish writing the ``getSum(numList)`` function that takes a list of numbers and returns the sum of all of the numbers in the list.  To calculate the sum initialize the sum to zero and then loop through all values in the list and add each one to the sum. Return the sum.

Examples
==========

For example, the call ``getSum([0, 1])`` should return 1, since ``0 + 1 = 1``.  The call ``getSum([1, 2, 3])`` should return 6 since ``1 + 2 + 3 = 6``.

Write Code Here
=================
    
Finish writing the ``getSum(numList)`` function so that the code compiles and prints |pass| for all the hidden tests when you click the |runbutton| button.

.. note::

    Since this is just practice I will help you solve this problem. After you click on the |start| button below you can copy all but the first line below into the runnable code area after the the function declaration and then click the |runbutton| button to check that all the tests print |pass|.
   

.. code-block:: python

   def getSum(numList):
       sum = 0
       for num in numList:
           sum = sum + num
       return sum
       
Click on the |start| button below when you are ready to try to finish writing this code.  You will have up to 5 minutes to try to write it.  Click on the |runbutton| button to run and test the code.  Click on the |finish| button when you have solved this problem or wish to move on without solving it.
       
.. timed:: practice_sum_write_timed
   :timelimit: 5
   :noresult:
   :nofeedback:
   :fullwidth:
   
   .. activecode:: Practice_Sum_Write
   
      # write the getSum function to take a list of numbers 
      # and return the sum of all of the numbers 
      def getSum(numList):
      
      ====
      
      # code to test the getSum function
      from unittest.gui import TestCaseGui
      
      class myTests(TestCaseGui):
      
          def testTarget(self):
              self.assertEqual(getSum([0, 1]), 1, "Test of getSum([0, 1])")
              self.assertEqual(getSum([1, 2, 3]), 6, "Test of getSum([1, 2, 3])")
              self.assertEqual(getSum([-1, 1, 3]), 3, "Test of getSum([-1, 1, 3])")
              
      myTests().main()
           
When you are finished with this problem, or are ready to move on, click the |finish| button and then go to the next page by clicking the right arrow |right| near the bottom right of this page.    
          
