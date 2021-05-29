"use strict"



function navBar(){
let page0Title = "home";
let page1Title = "et cetera";
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
list1.innerHTML = "<a href='" + page1Title + "'>" + page1Title +"</a><br>";
list2.innerHTML = "<a href='" + page2Title + "'>" + page2Title +"</a><br>";
list3.innerHTML = "<a href='" + page3Title + "'>" + page3Title +"</a><br>";
list4.innerHTML = "<a href='" + page4Title + "'>" + page4Title +"</a><br>";
list5.innerHTML = "<a href='" + page5Title + "'>" + page5Title +"</a><br>";


document.getElementById('nav').appendChild(list0);
document.getElementById('nav').appendChild(list2);
document.getElementById('nav').appendChild(list3);
document.getElementById('nav').appendChild(list4);
// document.getElementById('nav').appendChild(list1);
document.getElementById('nav').appendChild(list5);

}
const navSlide = () => {
    const burger = document.querySelector('.burger');

    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
        console.log("yes");
    });
}
navSlide();

const homeSideScroll = () => {
    const arrow = document.querySelector('.home-arrow-div');

    arrow.addEventListener('click',() =>{
        document.getElementById("whats-new2").scrollIntoView();
    });
}
// homeSideScroll();

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
    console.log(message);
    showDiv.remove;
    showDiv.innerHTML = "<img class='big' src='" + imageSource +"'>";
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
    // console.log("hey there");
    document.getElementById(chosenImage).setAttribute("title", imageInfo);
    console.log(imageSource);
    let showDiv = document.getElementById('image-magnifier');
    console.log(imageSource);
    showDiv.remove;
    showDiv.innerHTML = "<img class='big' src='" + imageSource +"'>";
    console.log("function complete");
}

function retractPub(imageDeselect){

    console.log(imageDeselect);
    let showDiv = document.getElementById('image-magnifier');
    let leaveImage = imageDeselect.id;
    document.getElementById(leaveImage).classList.remove('dim');
    document.getElementById(leaveImage).classList.remove('pub-expand');
    document.getElementById(leaveImage).classList.add('slider');
    showDiv.remove;
    showDiv.innerHTML = message;
}

function highlight(imageSelect){
    console.log(imageSelect);
    let chosenImage = imageSelect.id;
//     const mediaQuery = window.matchMedia('(min-width: 2351px)')
// // Check if the media query is true
// if (mediaQuery.matches) {
    // document.getElementById(chosenImage).style.opacity=1.0;
    document.getElementById(chosenImage).classList.remove('blur');
    document.getElementById(chosenImage).classList.add('unblur');
// }else{
    
}


function unhighlight(imageDeselect){

    console.log(imageDeselect);
    let leaveImage = imageDeselect.id;
    // document.getElementById(leaveImage).style.opacity=0.75;
    document.getElementById(leaveImage).classList.remove('unblur');
    document.getElementById(leaveImage).classList.add('blur');
}

function fastLoad(){

    // const arrayToCut = [0,1,2,3,4,5,6,7,8,9,10];
    // const n = 8;
    // const newArray = arrayToCut.slice(0,n);

    // document.getElementsByClassName('slider')[newArray].setAttribute("loading", 'eager');

    document.getElementsByClassName('slider')[0].setAttribute("loading", 'eager');
    document.getElementsByClassName('slider')[1].setAttribute("loading", 'eager');
    document.getElementsByClassName('slider')[2].setAttribute("loading", 'eager');
    document.getElementsByClassName('slider')[3].setAttribute("loading", 'eager');
    document.getElementsByClassName('slider')[4].setAttribute("loading", 'eager');
    document.getElementsByClassName('slider')[5].setAttribute("loading", 'eager');
    document.getElementsByClassName('slider')[6].setAttribute("loading", 'eager');
    document.getElementsByClassName('slider')[7].setAttribute("loading", 'eager');
    document.getElementsByClassName('slider')[8].setAttribute("loading", 'eager');
}
fastLoad();

function growShrinkLogo() {
    let mainLogo = document.getElementById("desktop-home-video");
    let homeLogo= document.getElementById("home-logo-setting");
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
      mainLogo.style.opacity='.2';
      mainLogo.style.transition=".4s";
      homeLogo.style.opacity='1';
      homeLogo.style.transition=".4s";

    } else {
        mainLogo.style.opacity='1';
        mainLogo.style.transition=".4s";
        homeLogo.style.opacity='0';
        homeLogo.style.transition=".4s";
    }
  }

// window.onload = function(){ 
//     document.getElementById("loading").classList.add('loader-fade-out');

// setTimeout(() => {
//     document.getElementById("loading").style.display = "none";
// }, 500);

// setTimeout(() => {
//     document.getElementById("logo-container").style.display = "initial";
// }, 2000);

// setTimeout(() =>{
//     document.getElementById("nav").style.display=('initial');
// }, 3000);
    

// }


