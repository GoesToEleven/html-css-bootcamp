# Transition

Simple method of animating certain properties of an element, with ability to define property, duration, delay and timing function.

**[Can I Use](http://caniuse.com/#search=transition)**

A transition occurs when an element changes from one state to another, and the browser fills in that state change with a sequence of in-between frames. It has a beginning and an end state.

We most often see transitions used on hover states, or when information on a page is added or removed. The hover states might be a subtle change in font color, and information on the page might fade from invisible to visible.

Since transitions are limited to these two stages, they can lack the nuance of animations but at the same time be easier to use.

When to use them?

If you want to change an element from one state to another smoothly, a transition is a good choice. Simple changes can usually be handled with transitions.

For a simple from/to animation, go with a transition.

# Animation

Complex method of animating certain properties of an element

[Can I Use](http://caniuse.com/#search=animation)

CSS Animations are a more powerful alternative to transitions. Rather than rely on a change from one beginning state to an end state, animations can be made up of as many in-between states as you like, and offer more control over how the states are animated.

Where a transition only goes from A to B, an animation can go from A, B, C to D. Or any number of stages as needed.

Animations achieve this by using sets of keyframes. Where a transition can be specified with one line in the class, an animation works by referencing a set of keyframes that are described separately in the CSS.

When to use them?

If an animation needs to run when the *page loads*, or is *more complex than a simple A to B state change*, a CSS animation might be more appropriate.

If you want to have an animation on the page that plays after a certain *delay*, use an animation.

If you want the flexibility provided by having *multiple keyframes* and easy *looping*, go with an animation.
