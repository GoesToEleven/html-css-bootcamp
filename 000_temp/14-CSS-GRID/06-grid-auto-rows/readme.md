# implicit and explicit grid

- explicit grid consists of the rows and columns you define with ```grid-template-columns``` and ```grid-template-rows```. 
- If you place something outside of that defined grid, or due to the amount of content more grid tracks are needed, then grid creates rows and columns in the implicit grid. These tracks will be auto-sized by default, so will size based on the content inside them.

You can also define a set size for tracks created in the implicit grid with the grid-auto-rows and grid-auto-columns properties.

In the below example we use grid-auto-rows to ensure that tracks created in the implicit grid are 200 pixels tall.