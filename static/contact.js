const element = document.getElementById("langset");

const lngIcon = document.getElementsByClassName("lngIcon")[0];
const langIcon = document.createElement('img');


const contacth = document.getElementById("contacth").innerHTML;
const namee = document.getElementById("name").placeholder;
const email = document.getElementById("email").placeholder;
const message = document.getElementById("message").placeholder;



if(document.cookie.includes('language=bg')){

    bg();
}


document.getElementById("bg").addEventListener("click", function(){

    document.cookie = 'language=bg';
    

    bg();
    
});


document.getElementById("eng").addEventListener("click", function(){

    element.src= `icon/ENG.png`
    
    document.cookie="language=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    
    document.getElementById("navAbout").innerHTML = "About Us";
    document.getElementById("navProducts").innerHTML = "Products";
    document.getElementById("navContact").innerHTML = "Contact Us";  

    document.getElementById("contacth").innerHTML = contacth;
    document.getElementById("name").placeholder = namee;
    document.getElementById("telephone").placeholder = telephone;
    document.getElementById("email").placeholder = email;
    document.getElementById("message").placeholder = message;

    


    
});




function bg(){
    element.src= `icon/BG.png`

    document.getElementById("navAbout").innerHTML = "За Нас";
    document.getElementById("navProducts").innerHTML = "Артикули";
    document.getElementById("navContact").innerHTML = "Свържете се с нас";  

    document.getElementById("contacth").innerHTML = "Свържете се с нас"
    document.getElementById("name").placeholder = "Име и фамилия"
    document.getElementById("email").placeholder = "Имейл"
    document.getElementById("message").placeholder = "Съобщение"
    document.getElementById("submitbut").value = "Изпрати"
}
