import DIV from "../lib_element/div.js";
import IMG from "../lib_element/img.js";
import H3 from "../lib_element/h3.js"

export default async function navbarPC(icon_post){
    const container = new DIV()
    container.element.style.display = "flex"
    container.element.style.alignItems = "center"
    container.element.style.justifyItems = "center"
    container.element.style.width = "100%"
    container.element.style.height = window.innerHeight / 100 * 10 + "px"
    container.appendTo(document.body)

    const emblem = new IMG()
    emblem.element.style.height = "100%"
    emblem.element.src = icon_post.emblem
    emblem.appendTo(container.element)

    const news = new H3()
    news.element.style.color = "white"
    news.element.style.marginLeft = "2%"
    news.element.innerHTML = "Новости"
    news.element.style.cursor = "pointer";
    news.animationShadow("mouseover","0px 2px 0px 0px red")
    news.animationShadow("mouseleave","")
    news.appendTo(container.element)

    const global = new H3()
    global.element.style.color = "white"
    global.element.style.marginLeft = "2%"
    global.element.style.cursor = "pointer";
    global.element.innerHTML = "Глобальный чат"
    global.animationShadow("mouseover","0px 2px 0px 0px red")
    global.animationShadow("mouseleave","")
    global.appendTo(container.element)

    const rule = new H3()
    rule.element.style.color = "white"
    rule.element.style.marginLeft = "2%"
    rule.element.innerHTML = "Правила"
    rule.element.style.cursor = "pointer";
    rule.animationShadow("mouseover","0px 2px 0px 0px red")
    rule.animationShadow("mouseleave","")
    rule.appendTo(container.element)

}