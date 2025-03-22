import DIV from "../../lib_element/div.js";
import IMG from "../../lib_element/img.js";
import H1 from "../../lib_element/h1.js";

export default async function navbarMobile(emblem_post){
    const container = new DIV()
    container.element.style.display = "flex"
    container.element.style.alignItems = "center";
    container.element.style.justifyContent = "space-between"; 
    container.element.style.width = "100%"
    container.element.style.height = window.innerHeight / 100 * 10 + "px"
    container.appendTo(document.body)

    const emblem = new IMG()
    emblem.element.style.height = "100%"
    emblem.element.src = emblem_post.emblem
    emblem.appendTo(container.element)
    
    const hamburger = new DIV()
    hamburger.element.style.height = window.innerHeight / 100 * 10 + "px"
    hamburger.element.style.width = window.innerHeight / 100 * 10 + "px"
    hamburger.element.style.backgroundColor = "black"; // тёмный фон для гамбургера
    hamburger.element.style.color = "white"; // цвет текста
    hamburger.element.style.fontSize = window.innerHeight / 100 * 3 + "px"
    hamburger.element.style.textAlign = "center";
    hamburger.element.style.cursor = "pointer";  
    hamburger.element.style.display = "grid";
    hamburger.element.style.placeItems = "center";
    hamburger.element.innerHTML = "☰"; 

    const hamburger_container = new DIV();
    hamburger_container.element.style.position = "absolute";
    hamburger_container.element.style.width = "0px"
    hamburger_container.element.style.height = "0px"
    hamburger_container.element.style.left = "0";          
    hamburger_container.element.style.backgroundColor = "black";
    hamburger_container.element.style.height = window.innerHeight / 100 * 90 + "px";
    hamburger_container.element.style.zIndex = "1000";    
    hamburger_container.appendTo(document.body);

    hamburger.element.addEventListener("click", async()=>{
        if(hamburger.element.innerHTML === "☰"){
            hamburger.element.innerHTML = "x"
            hamburger_container.element.innerHTML = ""
            hamburger_container.element.style.width = "100%"
            hamburger_container.element.style.height = window.innerHeight / 100 * 90  + "px";
            hamburger_container.element.style.display = "flex"
            hamburger_container.element.style.alignItems = "center"
            hamburger_container.element.style.flexDirection = "column";

            const home = new H1()
            home.element.style.color = "white"
            home.element.style.marginLeft = "2%"
            home.element.innerHTML = "Как пользоватся"
            home.element.style.cursor = "pointer";
            home.element.style.fontSize = window.innerHeight / 100 * 3  + "px"
            home.appendTo(hamburger_container.element)

            const news = new H1()
            news.element.style.color = "white"
            news.element.style.marginLeft = "2%"
            news.element.innerHTML = "Новости"
            news.element.style.cursor = "pointer";
            news.element.style.fontSize = window.innerHeight / 100 * 3  + "px"
            news.appendTo(hamburger_container.element)

            const contact = new H1()
            contact.element.style.color = "white"
            contact.element.style.marginLeft = "2%"
            contact.element.innerHTML = "Контакты"
            contact.element.style.cursor = "pointer";
            contact.element.style.fontSize = window.innerHeight / 100 * 3  + "px"
            contact.appendTo(hamburger_container.element)
              
        }
        else{
            hamburger.element.innerHTML = "☰"
            hamburger_container.element.innerHTML = ""
            hamburger_container.element.style.width = "0px"
            hamburger_container.element.style.height = "0px"
            hamburger_container.element.innerHTML = ""
        }
    })
    
    hamburger.appendTo(container.element)
}