import DIV from "../lib_element/div.js";
import H1 from "../lib_element/h1.js";
import IMG from "../lib_element/img.js";

export default async function navbarMobile(icon_post){
    const container = new DIV()
    container.element.style.display = "flex"
    container.element.style.alignItems = "center";
    container.element.style.justifyContent = "space-between"; 
    container.element.style.width = "100%"
    container.element.style.height = window.innerHeight / 100 * 10 + "px"
    container.appendTo(document.body)

    const emblem = new IMG()
    emblem.element.style.height = "100%"
    emblem.element.src = icon_post.emblem
    emblem.appendTo(container.element)
    
    const hamburger = new DIV()
    hamburger.element.style.height = window.innerHeight / 100 * 10 + "px"
    hamburger.element.style.width = window.innerHeight / 100 * 10 + "px"
    hamburger.element.style.backgroundColor = "black"; // тёмный фон для гамбургера
    hamburger.element.style.color = "white"; // цвет текста
    hamburger.element.style.fontSize = window.innerHeight / 100 * 3 + "px"
    hamburger.element.style.textAlign = "center";
    hamburger.element.style.cursor = "pointer";  // меняем курсор на руку
    hamburger.element.style.display = "grid";
    hamburger.element.style.placeItems = "center";
    hamburger.element.innerHTML = "☰"; 

    const hamburger_container = new DIV();
    hamburger_container.element.style.position = "absolute"; // Важно!
    hamburger_container.element.style.width = "0px"
    hamburger_container.element.style.height = "0px"
    hamburger_container.element.style.left = "0";          // Прижимаем к левому краю
    hamburger_container.element.style.backgroundColor = "black";
    hamburger_container.element.style.height = window.innerHeight / 100 * 90 + "px";
    hamburger_container.element.style.zIndex = "1000";    // Убеждаемся, что контейнер находится поверх контента
    hamburger_container.appendTo(document.body);

    hamburger.element.addEventListener("click", async()=>{
        if(hamburger.element.innerHTML === "☰"){
            hamburger.element.innerHTML = "x"
            hamburger_container.element.innerHTML = ""
            hamburger_container.element.style.width = "100%"
            hamburger_container.element.style.height = window.innerHeight / 100 * 90 + "px";
        }
        else{
            hamburger.element.innerHTML = "☰"
            hamburger_container.element.innerHTML = ""
            hamburger_container.element.style.width = "0px"
            hamburger_container.element.style.height = "0px"
        }
    })
    
    hamburger.appendTo(container.element)
}