# Overview

- a two-dimensional CSS grid system
- use to lay out major page areas or small user interface elements
- Grid is a powerful specification and when combined with other parts of CSS such as flexbox, can help you to create layouts that were previously impossible to build in CSS. It all starts by creating a grid on your grid container.


# Layout
A grid is a set of horizontal and vertical lines
- columns and rows 
- elements can be placed onto the grid

# Definitions

## container
- To work with grid, you need a grid container
- Create this with
```
#container {
    display: grid;
}
```

```
<main id="container">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
    <div>E</div>
    <div>F</div>
</main>
```

## item / child
- any direct child/descendent of a grid container

```
<main id="container">
    <div>A</div>
    <div>B</div>
    <div><p>not a grid child</p></div>
    <div>D</div>
    <div>E</div>
    <div>F</div>
</main>
```
## grid line
- any of the lines of the grid

![grid line](01-grid-line.png)

## track
- a row or column
- fixed or flexible
- px, %, fr

![grid track](02-grid-track.png)

## cell
- a single cell in the grid

![grid cell](03-grid-cell.png)

## area
- an area on the grid

![grid area](04-grid-area.png)

[source of images](https://css-tricks.com/snippets/css/complete-guide-grid/)


# Item placement
- place items on the grid using line numbers, names or by targeting an area of the grid. 
- Grid has default placement (placement of items not given an explicit position)

# Alignment
- control item alignment
- control alignment of entire grid

# z-index
- controls overlapping content; layering
- More than one item can be placed into a grid cell
- areas can partially overlap

