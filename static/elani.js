import {translate} from './translate.js'

//About us contents
const us =  document.getElementById("aboutus");
const abouth1 = document.getElementById("abouth1");

//Nav elements
const lngIcon = document.getElementsByClassName("lngIcon")[0];
const langIcon = document.createElement('img');
const navAboutus= document.getElementById("navAbout"); 
const navProduct= document.getElementById("navProducts");
const navContact= document.getElementById("navContact");

let me = document.cookie.split().map(cookie => cookie.split('='))
.reduce((accumulator, [key, value]) =>
    ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }),
    {});

    
langIcon.src = `icon/ENG.png`;
lngIcon.appendChild(langIcon)

check();

if(document.cookie.includes('language=bg')){
    document.getElementById("navAbout").innerHTML = "За Нас";
    document.getElementById("navProducts").innerHTML = "Артикули";
    document.getElementById("navContact").innerHTML = "Свържете се с нас";
}

document.getElementById("bg").addEventListener("click", function(){
        langIcon.remove();
        langIcon.src = 
        `icon/BG.png`;
        lngIcon.appendChild(langIcon)

        document.cookie = 'language=bg';
        abouth1.innerHTML = translate.bg.aboutus.title;
        us.innerHTML = translate.bg.aboutus.about;

        navAboutus.innerHTML = "За Нас";
        navProduct.innerHTML = "Артикули";
        navContact.innerHTML = "Свържете се с нас"
        
});

document.getElementById("eng").addEventListener("click", function(){
        langIcon.remove();
        langIcon.src = 
        `icon/ENG.png`;
        lngIcon.appendChild(langIcon)
        document.cookie="language=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        location.reload();
});



function check(){
    if(document.cookie.includes('language=bg')){
        //contents
        abouth1.innerHTML = translate.bg.aboutus.title;
        us.innerHTML= translate.bg.aboutus.about;
        langIcon.remove();
        langIcon.src = 
        `icon/BG.png`;
        lngIcon.appendChild(langIcon)

    } 
}









