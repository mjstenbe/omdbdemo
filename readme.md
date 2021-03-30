# Sample Single Page App for Codebootcamp 2021

Author: Mika Stenberg 2021.

Showing sample use of:

- jQuery
- AJAX
- OMDB API
- Bootstrap
- HTML5 form validation
- Document Driven Development (DDD)

The app is running in Netlify at: https://condescending-darwin-2cc598.netlify.app/

## To be resolved:
- When validating, the data error is sometimes displayed
- When adding event listened dynamically, the app loses the browser validation capability?

```
var btn = document.getElementById(“search”);
btn.addEventListener(“onclick”, function (event) {
getMovies(event);
});
```
