//CONTROLLER\\
import * as MODEL from "../model/model.js";

function route() {
    let hashTag = window.location.hash; //watch for change to url 
    let pageName = hashTag.replace("#","") //create variable to retrieve url content and remove hashtag 
    let pageContent = pageName + "Content"; //append "Content" to end of url variable

    //load home page content on load
    if(pageName == "") {
        pageContent = "homeContent";
    }

    //send pageContent to model to get page content
    MODEL.modelPageName(pageContent)
}

function initListeners() {
    $(window).on("hashchange",route); //when the url is changed via a hashtag, use route
    route(); //call the route function
}

$(document).ready(function () {
    initListeners(); //initial load when page is ready
});