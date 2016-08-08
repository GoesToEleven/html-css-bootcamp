some older browsers — namely, older WebKits and any version of Internet Explorer (before Edge 13) — only support inline references for use with ...

<use xlink:href="#some-id"/>

... take a look at the image in this folder: comparison-table.png. Also take a look at ...

http://caniuse.com/#feat=svg-html5

You can use external svgs and get it to work on all browsers with a JavaScript polyfill:

svg4everybody
https://github.com/jonathantneal/svg4everybody

svgxuse
https://github.com/Keyamoon/svgxuse

Or you can decide to include your sprite inline, in the HTML code of every page, as demonstrated in the next folder: 02_inline-svg

Run the inline svg in an older IE browser and compare it to the external svg in the same older browser.

Look at best-practice.png