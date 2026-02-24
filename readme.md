1.
getElementById()

Select one element by its id
Returns a single element 
IDs must be unique
Cannot select class or complex selectors
It is very fast
It returns only one element 

getElementByClassName()

Select elements by class name 
Returns a html collection
It can return multiple element 

querySelector()

It Select using css selector 
It returns first matching element only
It is very flexible 

querySelectorAll()

It select using css selector 
It Returns nodeList 
It can select multiple elements 
It more flexible


2.
• Create a new element 
• Add content or attributes
• Insert it into the DOM 

3. 
Event bubbling is a concept in the DOM where an event starts from the target element and then "bubbles up" to its parent element one by and.

When user click on a child element, the event first run on that element, then on its parent, then the parents parent all the way up to the document. 
Example:
<button id="btn">click here</button>

document.getElementById('btn').addEventListener("click", function(){
  console.log("button clicked");
});
Output console:
button clicked

4.
Event Delegation is a technique where you attach a single event listener to a parent element instead of adding event listeners to multiple child elements.
It is very useful because better performance, works for dynamic element, cleaner and shorter code.