//ID Selector (selected the HTML element with the ID "highlight")
var tag = document.getElementById("highlight");

//Class Selector (Selects all HTML elements with the class "bolded")
var tags = document.getElementsByClassName("bolded");

//Selecting elements by Tag Name (all elements with tag "li" are selected)
var liTags = document.getElementsByTagName("li");

//NOTE: We could also select the body, head or html elements by their tag names
var body = document.getElementsByTagName("body")[0]

//Query selector(selects first match of an elements. And it uses uses css-style selector)
var h1 = document.querySelector("h1"); //selects the first h1

//selects using css-style
var liTag = document.querySelector("#highlight");

//selects first li with the class "bolded".
var liTags = document.querySelector(".bolded");

//QUERY SELECTOR ALL (selects all matching elements, and also uses the css-style selector)

//selects all h1 tags
var h1 = document.querySelectorAll ("h1");


var liTag = document.querySelectorAll ("#highlight");