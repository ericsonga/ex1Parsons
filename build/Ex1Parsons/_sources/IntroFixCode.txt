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
    
.. |right| image:: Figures/rightArrow.png
    :height: 24px
    :align: top
    :alt: right arrow for next page
    
.. |finish| image:: Figures/finishExam.png
    :height: 24px
    :align: top
    :alt: finishExam
    
.. |start| image:: Figures/start.png
    :height: 24px
    :align: top
    :alt: start

               
Introduction to Fix Code Problems
-----------------------------------

In fix code problems you will be given code for a function, but the code will contain errors.  The function is followed by hidden code that tests the function.  You will click the |runbutton| button to try and compile and run the code.  

Start the Exam
==================

Click the |start| button to start the exam and show the problem.

Fix Compile-time errors
=========================

If there are any compile time errors they will be displayed below the code after you click the |runbutton| button as shown in the figure below.  The error shown in the figure below is because line 7 is missing a ``:`` at the end of the code.

.. figure:: Figures/fixCodeError.png
    :width: 600px
    :align: center
    :figclass: align-center

    Figure 1: Fix code problem with a compiler error displayed below the code   
    
Fix Logic Errors - Failing Tests
====================================
    
After you fix all the compile time errors the tests that are provided after the function will run.  If any of these tests print |fail| then there is still something wrong with the code such as a logic error as shown in the figure below.  In this case the sum was initialized to 1 instead of 0 on line 4.  If any of tests fail then fix the code and run it again.

.. figure:: Figures/fixCodeLogicError2.png
    :width: 600px
    :align: center
    :figclass: align-center

    Figure 2: Fix code problem with tests that failed.
    
Passing all Tests
==================
    
When you have fixed all the errors in the code the tests will all print |pass| after you click on the |runbutton| button as shown in the figure below.

.. figure:: Figures/fixCodeTestPass2.png
    :width: 600px
    :align: center
    :figclass: align-center

    Figure 3: Fix code problem with all tests passing.
    
Finish the Exam
=================

Click on the |finish| button below the question when you have either gotten the question correct or are ready to move on.   
    
Go to the Next Page
=====================

Click the right arrow |right| near the bottom right of this page to go to the next page to practice solving a fix code problem.
           
