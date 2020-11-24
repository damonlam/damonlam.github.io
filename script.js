"use strict"

function navBar(){
let page0Title = "home";
let page1Title = "about";
let page2Title = "stream";
let page3Title = "alchemy";
let page4Title = "repository";
let page5Title = "info";


let list0 = document.createElement('li');
let list1 = document.createElement('li');
let list2 = document.createElement('li');
let list3 = document.createElement('li');
let list4 = document.createElement('li');
let list5 = document.createElement('li');

 
list0.innerHTML = "<a href='index.html'>" + page0Title +"</a><br>";
list1.innerHTML = "<a href='about.html'>" + page1Title +"</a><br>";
list2.innerHTML = "<a href='" + page2Title + "'>" + page2Title +"</a><br>";
list3.innerHTML = "<a href='" + page3Title + "'>" + page3Title +"</a><br>";
list4.innerHTML = "<a href='" + page4Title + "'>" + page4Title +"</a><br>";
list5.innerHTML = "<a href='" + page5Title + "'>" + page5Title +"</a><br>";


document.getElementById('nav').appendChild(list0);
// document.getElementById('nav').appendChild(list1);
document.getElementById('nav').appendChild(list2);
document.getElementById('nav').appendChild(list3);
document.getElementById('nav').appendChild(list4);
document.getElementById('nav').appendChild(list5);

}
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-else');
    // const navLink = document.querySelectorAll('.nav-else li');
    //toggle nav

    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        console.log("yes");
    });

}
navSlide();

let message = document.getElementById('image-magnifier').innerHTML;

function expand(imageSelect){
    console.log(imageSelect);
    let chosenImage = imageSelect.id;
    let imageSource = document.getElementById(chosenImage).src;
    let imageInfo = document.getElementById(chosenImage).alt;
    document.getElementById(chosenImage).classList.add('dim');
    document.getElementById(chosenImage).classList.remove('slider');
    document.getElementById(chosenImage).classList.add('slider-expand');
    document.getElementById(chosenImage).setAttribute("title", imageInfo);
    console.log(imageSource);
    let showDiv = document.getElementById('image-magnifier');
    // let message = document.getElementById('image-magnifier').innerHTML;
    console.log(message);
    showDiv.remove;
    showDiv.innerHTML = "<img class='big' src='" + imageSource +"'>";
    // document.getElementById('image-magnifier').appendChild(showDiv);
}

function retract(imageDeselect){

    console.log(imageDeselect);
    let showDiv = document.getElementById('image-magnifier');
    let leaveImage = imageDeselect.id;
    document.getElementById(leaveImage).classList.remove('dim');
    document.getElementById(leaveImage).classList.remove('slider-expand');
    document.getElementById(leaveImage).classList.add('slider');
    showDiv.remove;
    showDiv.innerHTML = message;
}

function expandPub(imageSelect){
    console.log(imageSelect);
    let chosenImage = imageSelect.id;
    let imageSource = document.getElementById(chosenImage).src;
    let imageInfo = document.getElementById(chosenImage).alt;
    document.getElementById(chosenImage).classList.add('dim');
    document.getElementById(chosenImage).classList.remove('slider');
    document.getElementById(chosenImage).classList.add('pub-expand');
    document.getElementById(chosenImage).setAttribute("title", imageInfo);
    console.log(imageSource);
    let showDiv = document.getElementById('image-magnifier');
    // let message = document.getElementById('image-magnifier').innerHTML;
    console.log(message);
    showDiv.remove;
    showDiv.innerHTML = "<img class='big' src='" + imageSource +"'>";
    // document.getElementById('image-magnifier').appendChild(showDiv);
}

function retractPub(imageDeselect){

    console.log(imageDeselect);
    let showDiv = document.getElementById('image-magnifier');
    let leaveImage = imageDeselect.id;
    document.getElementById(leaveImage).classList.remove('dim');
    document.getElementById(leaveImage).classList.remove('pub-expand');
    document.getElementById(leaveImage).classList.add('slider');
    // previousImage.classList.remove('dim');
    showDiv.remove;
    showDiv.innerHTML = message;
        // document.getElementById('image-magnifier').appendChild(showDiv);
}
let x = window.matchMedia("(min-width: 901px)")

function unsplashLink(unsplashSelect){
    let chosenId = unsplashSelect.id;
    let unsplashURL = document.getElementById(unsplashSelect).src;


}
