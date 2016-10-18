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
	:prefix: 4-3-a-
	
.. |right| image:: Figures/rightArrow.png
    :height: 24px
    :align: top
    :alt: right arrow for next page
	

Answer 3: Find the Average Dropping the Lowest Value
-----------------------------------------------------------

To find the average of all but the lowest value first check if the length of the list is less than or equal to one and if so return 0.  Otherwise create a variable to hold the sum and initialize it to 0. Create another variable to hold the lowest value found so far and set it to the first value in the list. Next loop through all the indices in the list and add the value at the current index to the sum.  Also check if the current value is less than the saved lowest value found so far and if it is set the lowest value to the current value.  Return the sum minus the lowest value divided by the number of values in the list minus one.

.. figure:: Figures/AnsParsons3.png
    :width: 600px
    :align: center
    :figclass: align-center

    Figure 1: The answer to the find the average, but drop the lowest value.  

Click the right arrow |right| near the bottom right of this page to go to the next page        