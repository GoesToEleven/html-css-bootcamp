With http1.1, you would want to limit the number of calls to the server.

With http2, calls are not sequential so you can make a lot of calls.

See:

You could also do it this way, putting your media queries in a stylesheet:

@media screen and (min-width: 900px) {

    h1 {
        color: red;
    }

}