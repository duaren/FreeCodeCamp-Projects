// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    /* Toggle with if-else funtion
    if (links.classList.contains("show-links")) {
        links.classList.remove("show-links");
    }
    else {
        links.classList.add("show-links");
    } */

    // Toggle with toggle property
    links.classList.toggle("show-links");
});