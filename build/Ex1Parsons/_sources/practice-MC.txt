.. qnum::
   :prefix: 1-1-
   :start: 1
   
.. |start| image:: Figures/start.png
    :height: 24px
    :align: top
    :alt: start
    
.. |next| image:: Figures/next.png
    :height: 24px
    :align: top
    :alt: next
    
.. |prev| image:: Figures/prev.png
    :height: 24px
    :align: top
    :alt: prev
    
.. |right| image:: Figures/rightArrow.png
    :height: 24px
    :align: top
    :alt: right arrow for next page
    
.. |finish| image:: Figures/finishExam.png
    :height: 24px
    :align: top
    :alt: finishExam
   
Practice Multiple-Choice Questions
-----------------------------------

Click on the |start| button below when you are ready to answer the practice multiple-choice questions.  Click on the |next| button below the question to display the next question.  When you are finished answering all the questions you can, click the |finish| button below the questions.

.. timed:: practicemc
   :noresult:
   :nofeedback:
   :notimer:
       
   .. mchoice:: prac1
      :answer_a: 1
      :answer_b: 2
      :answer_c: 3
      :answer_d: 5
      :answer_e: 6
      :correct: d
      :feedback_a: This would be true if it was print(x - y)
      :feedback_b: This would be true if it was print(y)
      :feedback_c: This would be true if it was print(x)
      :feedback_d: Since x is equal to 3 and y is equal to 2 then x + y is 5.
      :feedback_e: This would be true if it was print(x * y)

      What will be printed when the following code is executed (run)?
       
      ::
          
           x = 3
           y = 2
           print(x + y)

   .. mchoice:: prac2
      :answer_a: -1
      :answer_b: 0
      :answer_c: 1
      :answer_d: 3
      :correct: c
      :feedback_a: This will only print when x is less than 0.
      :feedback_b: This will only print when x is 0.  When y is set to x it gets a copy of the value in x and doesn't set the value of x to 0.
      :feedback_c: This will print when the value of x is greater than 0.
      :feedback_d: This would be true if it was print(x)

      What would the following code print?
      ::
               
           x = 3
           y = x
           if x == 0:
               print(0)
           elif x > 0:
               print(1)
           else:
               print(-1)
                         
When you are finished answering all the questions you can, click the |finish| button and then go to the next page by clicking the right arrow |right| near the bottom right of this page.   