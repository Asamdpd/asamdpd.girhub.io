

const lngIcon = document.getElementsByClassName("lngIcon")[0];
const langIcon = document.createElement('img');



if(document.cookie.includes('language=bg')){

    bg();
}


document.getElementById("bg").addEventListener("click", function(){

    document.cookie = 'language=bg';
    

    bg();
    
});


document.getElementById("eng").addEventListener("click", function(){

    document.getElementById("langset").src= `/static/icon/ENG.png`
    
    document.cookie="language=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    
    document.getElementById("navAbout").innerHTML = "About Us";
    document.getElementById("navProducts").innerHTML = "Products";
    document.getElementById("navContact").innerHTML = "Contact Us";  

 

    


    
});




function bg(){
    console.log("dog")
    document.getElementById("langset").src= `/static/icon/BG.png`

    document.getElementById("navHome").innerHTML = "Начало";   
    document.getElementById("navAbout").innerHTML = "За Нас";
    document.getElementById("navProducts").innerHTML = "Артикули";
    document.getElementById("navContact").innerHTML = "Свържете се с нас";  

  
}