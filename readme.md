# Sample Single Page App for Codebootcamp 2021

Author: Mika Stenberg 2021.

Showing sample use of:

- jQuery
- AJAX
- OMDB API
- Bootstrap
- HTML5 form validation

The app is running in Netlify at: xxx
To be resolved:
When adding event listened dynamically, the app loses the browser validation capability?

```
var btn = document.getElementById(“search”);
btn.addEventListener(“onclick”, function (event) {
getMovies(event);
});
```
