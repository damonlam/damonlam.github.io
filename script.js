"use strict"

function navBar(){
let page0Title = "home";
let page1Title = "about";
let page2Title = "stream";
let page3Title = "develop";
let page4Title = "contact";


let list0 = document.createElement('li');
let list1 = document.createElement('li');
let list2 = document.createElement('li');
let list3 = document.createElement('li');
let list4 = document.createElement('li');
 
list0.innerHTML = "<a href='index.html'>" + page0Title +"</a><br>";
list1.innerHTML = "<a href='about.html'>" + page1Title +"</a><br>";
list2.innerHTML = "<a href='stream.html'>" + page2Title +"</a><br>";
list3.innerHTML = "<a href='develop.html'>" + page3Title +"</a><br>";
list4.innerHTML = "<a href='contact.html'>" + page4Title +"</a>";


document.getElementById('nav').appendChild(list0);
document.getElementById('nav').appendChild(list1);
document.getElementById('nav').appendChild(list2);
document.getElementById('nav').appendChild(list3);
document.getElementById('nav').appendChild(list4);

}

function expand(imageSelect){
    console.log(imageSelect);
    let chosenImage = imageSelect.id;
    let imageSource = document.getElementById(chosenImage).src;
    console.log(imageSource);

    let showDiv = document.getElementById('image-magnifier');
    showDiv.remove;
    showDiv.innerHTML = "<img id='big' style='justify-content:right' src='" + imageSource +"'>";
    document.getElementById('image-magnifier').appendChild(showDiv);
}

let delayInMilliseconds = 1000;
// setTimeout(function(){

function retract(imageDeselect){
    console.log(imageDeselect);
    let showDiv = document.getElementById('image-magnifier');
    // let description = document.getElementById('photostream-text').innerHTML;
    showDiv.innerHTML = "<div id='photostream-text' class='header-icon'> <div class='icon-div'> <img class='icon-size' src='icn/cone_of_possibility.png' alt=''></div><p>This is an aggregate photostream pulled from my <a id='not-nav' target='_blank' href='https://unsplash.com/dayday95'>Unsplash</a>, <a id='not-nav' target='_blank' href='https://www.instagram.com/dayday95/'>Instagram</a> and film archive.<br><br>Updates will be made sporadically from time to time. <br><br>&#128270; tap or hover over thumbnail to enlarge</p></div>";
    document.getElementById('image-magnifier').appendChild(showDiv);
    // let descriptionTag = document.getElementById('photostream-text');
    //     description = descriptionTag.innerHTML;
    // console.log('description' + description);
    
    // showDiv.innerHTML = 
    // showDiv.
}
// }, delayInMilliseconds);

function unsplashLink(unsplashSelect){
    let chosenId = unsplashSelect.id;
    let unsplashURL = document.getElementById(unsplashSelect).src;


}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-else');
    // const navLink = document.querySelectorAll('.nav-home li');
    //toggle nav

    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');
    });
//     //animate links
//     navLinks.forEach(link, index=>{
//         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`
//         console.log(index / 7);
//     });
}

navSlide();
