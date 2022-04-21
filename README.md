Angular Velocity Demo
=====================

Description
-----------
A particle system using angular velocity.
This was mostly created to practice using radian angles,
vectors, and physics formulas.

How it works
------------
Each particle has a set angle that randomly changes
once per frame. Using trigonometry and a set net velocity,
the x and y components of the velocity can be calculated.
If you multiply each velocity by the frame-time, you get the 
x and y displacements (direction and magnitude). Using the vector's
reduce method, this becomes a single value that can be added to the
particle's body position.
