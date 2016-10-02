# Transitions & Animations


Transitions and animations do the same thing.

- **Transitions:** do it between **two** points.
- **Animations:** do it between **two or more** points.

The result of a transition, or animation, are the same: a gradual change between two (or more) points.

**Animations** are good for changes which occur **between more than two points**. In addition, animations give you more options on what is being changed.

***

# Transition

**[Can I Use](http://caniuse.com/#search=transition)**

Transitions are good for changes which occur from one point to another point. That's two points: a beginning point and an end point.

A transition occurs when an element changes from one state to another, and the browser fills in that state change with a sequence of in-between frames. It has a beginning and an end state.

We most often see transitions used on hover states, or when information on a page is added or removed. The hover states might be a subtle change in font color, and information on the page might fade from invisible to visible.

Since transitions are limited to these two stages, they can lack the nuance of animations but at the same time be easier to use.

When to use them?

If you want to change an element from one state to another smoothly, a transition is a good choice. Simple changes can usually be handled with transitions.

For a simple from/to animation, go with a transition.

***

## CSS Properties

Transitions offer a simple method of transitioning properties of an element.

Here are the CSS properties associated with transitions and sample values:

- transition-property: all;
- transition-duration: 500ms;
- transition-timing-function: ease-in-out;
- transition-delay: 1s;

### shorthand notation
- transition: all 500ms ease 1s;


*** 

# Animation

Animations offer a method of animating properties of an element

[Can I Use](http://caniuse.com/#search=animation)

CSS Animations are a more powerful alternative to transitions. Rather than rely on a change from one beginning state to an end state like **transitions** do, **animations** can be made up of as many in-between states as you like, and offer more control over how the states are animated.

Where a transition only goes from A to B, an animation can go from A, B, C to D, to any number of stages as needed.

Animations achieve this by using sets of keyframes. Where a transition can be specified with one line in the class, an animation works by referencing a set of keyframes that are described separately in the CSS.

When to use them?

If an animation needs to run when the *page loads*, or is *more complex than a simple A to B state change*, a CSS animation might be more appropriate.

If you want to have an animation on the page that plays after a certain *delay*, use an animation.

If you want the flexibility provided by having *multiple keyframes* and easy *looping*, go with an animation.

***

## CSS Properties

Here are the CSS properties associated with animations and their default values:

- animation-name: none
- **animation-duration: 0s**
- animation-iteration-count: 1
- animation-direction: normal
- **animation-timing-function: ease**
- **animation-delay: 0s**
- animation-fill-mode: none
- animation-play-state: running

***

 **bold properties are properties that transition also uses**

 transition also has: *transition-property: all;*

***

## animation-name

**default value: none**

The animation-name CSS property specifies a *list of animations* that should be applied to the **selected element**. 

Each name indicates an **@keyframes** at-rule that defines the property values for the animation sequence.

Examples:

```css
/* no animation */
animation-name: none;

/* a single animation */
animation-name: test1;

/* a list of animations */
animation-name: test1, animation4;

/* Global values */
animation-name: initial
animation-name: inherit
animation-name: unset
```
# @keyframes

The **@keyframes** at-rule (a CSS at-rule) lets authors control the intermediate steps in a CSS animation sequence by establishing **keyframes** (or waypoints) along the animation sequence that must be reached by certain points during the animation. 

To use keyframes, you create a **@keyframes** rule with the **name** that is used by the **animation-name** property. This matches an animation-name with the @keyframes at-rule. 

```css
body {
    animation-name: myCustomAnima;
}

@keyframes myCustomAnima {
  0% { color: red; }
  100%   { color: gold; }
}
```

Each **@keyframes** at-rule contains rule-sets (a **style list**) of keyframe selectors, each of which is comprised of a percentage along the animation at which the keyframe occurs as well as a block containing the style information for that keyframe.

You can list the keyframes in any order; they will be handled in the order in which their specified percentages indicate they should occur.

You can also use the "from" and "to" keywords:

```css
body {
    animation-name: change-color;
}

@keyframes change-color {
  from { color: red; }
  to   { color: gold; }
}
```

In order for a keyframe list to be valid, it must include rules for the beginning and end of the animation: the 0% (or from) and 100% (or to). If the beginning and/or ending states of the animation aren't specified, the keyframe declaration is invalid; as such, it will be ignored by the parser and can't be used for animation.

If you include properties that can't be animated in your keyframe rules they get ignored, but supported properties will still be animated.

# animation-duration

**default value: 0s**

The animation-duration CSS property specifies the length of time that an animation should take to complete one cycle.

Examples:

```css
animation-duration: 6s;
animation-duration: 120ms;

/* Multiple animations */
animation-duration: 1s, 15s;
animation-duration: 10s, 30s, 230ms;
```

# animation-iteration-count

**default value: 1**

The animation-iteration-count CSS property defines the number of times an animation cycle should be played before stopping.

```css
animation-iteration-count: infinite;
animation-iteration-count: 3;
animation-iteration-count: 2.3;

/* Multiple animations */
animation-iteration-count: 2, 0, infinite;
```
# animation-direction

**default value: normal**

The animation-direction CSS property indicates whether the animation should play in reverse on alternate cycles.

```css
/* Single animation */
animation-direction: normal;
animation-direction: reverse;
animation-direction: alternate;
animation-direction: alternate-reverse;

/* Multiple animations */
animation-direction: normal, reverse;
animation-direction: alternate, reverse, normal;

/* Global values */
animation-direction: inherit;
animation-direction: initial;
animation-direction: unset;
```
# animation-timing-function

**default value: ease**

The animation-timing-function CSS property specifies how a CSS animation should progress over the duration of each cycle. 

```css
/* Keyword values */
animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: step-start;
animation-timing-function: step-end;

/* Multiple animations */
animation-timing-function: ease, step-start;

/* Global values */
animation-timing-function: inherited;
animation-timing-function: initial;
animation-timing-function: unset;
```

# animation-fill-mode

**default value: none**

Do you want your element to stay in the state reached at the end of the animation?

The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.

See the example to understand this.

```css
animation-fill-mode: none;
animation-fill-mode: forwards;
animation-fill-mode: backwards;
animation-fill-mode: both;
```

# animation-play-state

**default value: running**

The animation-play-state CSS property determines whether an animation is running or paused. 

This can be queried to determine whether or not the animation is currently running. 

In addition, its value can be set to pause and resume playback of an animation.

Resuming a paused animation will start the animation from where it left off at the time it was paused, rather than starting over from the beginning of the animation sequence.

```css
/* Single animation */
animation-play-state: running;
animation-play-state: paused;

/* Multiple animations */
animation-play-state: paused, running, running;

/* Global values */
animation-play-state: inherited;
animation-play-state: initial;
animation-play-state: unset;
```

# animation-delay

**default value: 0s**

The animation-delay CSS property specifies when the animation should start. This lets the animation sequence begin some time after it's applied to an element.

```css
animation-delay: 3s;
animation-delay: 2s, 4ms;
```

