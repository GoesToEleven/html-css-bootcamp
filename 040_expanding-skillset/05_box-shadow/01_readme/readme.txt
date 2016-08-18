# box-shadow

The box-shadow property describes one or more shadow effects
as a comma-separated list: **x, y, blur-radius, color**

It enables you to cast a drop shadow from almost any element.

If a border-radius is specified on the element,
the box shadow takes on the same rounded corners.

This is A LOT like text-shadow

```css
/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
```