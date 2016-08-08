Use relative units

A key concept behind responsive design is fluidity and proportionality as opposed to fixed width layouts.

Using relative units for measurements can help simplify layouts and prevent accidentally creating components that are too big for the viewport.

For example, setting "width: 100%" on a top level div, ensures that it spans the width of the viewport and is never too big or too small for the viewport. The div will fit, no matter if it’s a 320px wide iPhone, a 360px wide Nexus 5, or something else.

In addition, using relative units allows browsers to render the content based on the users zoom level without the need for adding horizontal scroll bars to the page.

source:
https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/use-media-queries?hl=en