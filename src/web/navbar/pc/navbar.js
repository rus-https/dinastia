import DIV from "../../lib_element/div.js";
import IMG from "../../lib_element/img.js";
import H3 from "../../lib_element/h3.js"

export default async function navbarPC(emblem_post){
    const container = new DIV()
    container.element.style.display = "flex"
    container.element.style.alignItems = "center"
    container.element.style.justifyItems = "center"
    container.element.style.width = "100%"
    container.element.style.height = window.innerHeight / 100 * 10 + "px"
    container.appendTo(document.body)

    const emblem = new IMG()
    emblem.element.style.height = "100%"
    emblem.element.src = emblem_post.emblem
    emblem.appendTo(container.element)

    const home = new H3()
    home.element.style.color = "white"
    home.element.style.marginLeft = "2%"
    home.element.innerHTML = "Как пользоватся"
    home.element.style.cursor = "pointer";
    home.animationShadow("mouseover","0px 2px 0px 0px red")
    home.animationShadow("mouseleave","")
    home.appendTo(container.element)

    const news = new H3()
    news.element.style.color = "white"
    news.element.style.marginLeft = "2%"
    news.element.innerHTML = "Новости"
    news.element.style.cursor = "pointer";
    news.animationShadow("mouseover","0px 2px 0px 0px red")
    news.animationShadow("mouseleave","")
    news.appendTo(container.element)

    const contact = new H3()
    contact.element.style.color = "white"
    contact.element.style.marginLeft = "2%"
    contact.element.innerHTML = "Контакты"
    contact.element.style.cursor = "pointer";
    contact.animationShadow("mouseover","0px 2px 0px 0px red")
    contact.animationShadow("mouseleave","")
    contact.appendTo(container.element)

}