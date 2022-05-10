
const element = document.getElementById("langset");

const lngIcon = document.getElementsByClassName("lngIcon")[0];
const langIcon = document.createElement('img');


 const h1 =  document.getElementById("h1").innerHTML 
 const p1  = document.getElementById("p1").innerHTML 
 const u1  = document.getElementById("u1").innerHTML 

 const h2  = document.getElementById("h2").innerHTML
 const u2  = document.getElementById("u2").innerHTML 

 const h3  = document.getElementById("h3").innerHTML 
 const p3  = document.getElementById("p3").innerHTML 
 const u3  = document.getElementById("u3").innerHTML 

 const h4  = document.getElementById("h4").innerHTML 
 const p4  = document.getElementById("p4").innerHTML 
 const u4  = document.getElementById("u4").innerHTML 

 const h5  = document.getElementById("h5").innerHTML 
 const p5  = document.getElementById("p5").innerHTML  
 const u5  = document.getElementById("u5").innerHTML 

 const h6  = document.getElementById("h6").innerHTML  
 const u6  = document.getElementById("u6").innerHTML 

 const h7  = document.getElementById("h7").innerHTML 
 const p7  = document.getElementById("p7").innerHTML 
 const u7  = document.getElementById("u7").innerHTML 



if(document.cookie.includes('language=bg')){

    bg();
}


document.getElementById("bg").addEventListener("click", function(){

    document.cookie = 'language=bg';
    

    bg();
    
});


document.getElementById("eng").addEventListener("click", function(){

    element.src= `/static/icon/ENG.png`
    
    document.cookie="language=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    
    document.getElementById("navAbout").innerHTML = "About Us";
    document.getElementById("navProducts").innerHTML = "Products";
    document.getElementById("navContact").innerHTML = "Contact Us";  

    document.getElementById("h1").innerHTML = h1;
    document.getElementById("p1").innerHTML = p1;
    document.getElementById("u1").innerHTML = u1;

    document.getElementById("h2").innerHTML = h2;
    document.getElementById("u2").innerHTML = u2;

    document.getElementById("h3").innerHTML = h3;
    document.getElementById("p3").innerHTML = p3;
    document.getElementById("u3").innerHTML = u3;

    document.getElementById("h4").innerHTML = h4;
    document.getElementById("p4").innerHTML = p4;
    document.getElementById("u4").innerHTML = u4;

    document.getElementById("h5").innerHTML = h5;
    document.getElementById("p5").innerHTML = p5;
    document.getElementById("u5").innerHTML = u5;

    document.getElementById("h6").innerHTML = h6;
    document.getElementById("u6").innerHTML = u6;

    document.getElementById("h7").innerHTML = h7;
    document.getElementById("p7").innerHTML = p7;
    document.getElementById("u7").innerHTML = u7;


    
});




function bg(){
    element.src= `static/icon/BG.png`

    document.getElementById("navAbout").innerHTML = "За Нас";
    document.getElementById("navProducts").innerHTML = "Артикули";
    document.getElementById("navContact").innerHTML = "Свържете се с нас";  

    document.getElementById("h1").innerHTML = "Хранилки за кучета и котки"
    document.getElementById("p1").innerHTML = "Артикулите могат да бъдат в най различни цветове"
    document.getElementById("u1").innerHTML = "Цена: €40"

    document.getElementById("h2").innerHTML = "Единична хранилка или цветарник";
    document.getElementById("u2").innerHTML = "Цена: €35"

    document.getElementById("h3").innerHTML = "Легло за домашни любимци"
    document.getElementById("p3").innerHTML = "50 см в диаметър"
    document.getElementById("u3").innerHTML = "Цена: €50"

    document.getElementById("h4").innerHTML = "Легло за домашни любимци"
    document.getElementById("p4").innerHTML = "40 на 40 см"
    document.getElementById("u4").innerHTML = "Цена: €40"

    document.getElementById("h5").innerHTML = "Легло"
    document.getElementById("p5").innerHTML = "Метър на метър"
    document.getElementById("u5").innerHTML = "Цена: €140"

    document.getElementById("h6").innerHTML = "Закачалка за стена"
    document.getElementById("u6").innerHTML = "Цена: €35"

    document.getElementById("h7").innerHTML = "Хранилки за кучета и котки"
    document.getElementById("p7").innerHTML = "Артикулите могат да бъдат в най различни цветове"
    document.getElementById("u7").innerHTML = "Цена: €40"
}
