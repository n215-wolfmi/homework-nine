# Homework Nine

Author: Matthew Wolf, IUPUI, Spring 2022

Web 4 Link to homework assignment:
https://in-info-web4.informatics.iupui.edu/~wolfmi/homework-nine/ 

This homework assignment goes over a small MVC design in delivering content to a single page dynamically with JavaScript. 

The model.js file contains the content to actually be inputted into the page and a small function to recieve the page content variable name that was created from a user click on a link from app.js.

The app.js file is the "controller" of the design. There are several functions in this. An initial loading function on page ready, a listener function to listen for link clicks, and a route fuction which takes the clicked link and forms it into a variable to send to the model in order to display the correct variable for the correct page. The variable that was collected from the route function is then passed into a function that is imported from the model.js file. That funciton then inserts the variable into the #app div on the page.