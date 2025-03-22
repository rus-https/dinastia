import DIV from "../lib_element/div.js"
import TEXTAREA from "../lib_element/textarea.js"
import IMG from  "../lib_element/img.js"

import escapeHtmlUp from "../escapehtmlup.js"
import add from "../post/add.js"
import list from "../post/list.js"
import massiveList from "../miniaps/massivelist.js"
import constructor from "../miniaps/mobile/constructor.js"
import icon from "../post/icon.js"
import massiveUp from "../miniaps/massiveup.js"
import navbarMobile from "../navbar/mobile/navbar.js"
import emblem from "../post/emblem.js"

export default async function messagePC(name,key,tag) {
const name_post = escapeHtmlUp(name)
const tag_post = escapeHtmlUp(tag)
const icon_post = await icon()
const emblem_post = await emblem()

const navbar =  await navbarMobile(icon_post,emblem_post)

const container_chat = new DIV()
container_chat.element.style.width = "100%"
container_chat.element.style.height = (window.innerHeight / 100) * 70 + "px"
container_chat.element.style.display = "flex";
container_chat.element.style.flexDirection = "column";
container_chat.element.style.justifyContent = "flex-start";
container_chat.element.style.alignItems = "center";
container_chat.element.style.boxSizing = "border-box";
container_chat.element.style.overflowY = "auto";
container_chat.element.style.msOverflowStyle = "none";
container_chat.element.style.scrollbarWidth = "none"; 
container_chat.appendTo(document.body);

const container_message = new DIV();
container_message.element.style.display = "flex";
container_message.element.style.justifyContent = "center";
container_message.element.style.alignItems = "center";
container_message.element.style.flexDirection = "column";
container_message.element.style.width = "90%";
container_message.element.style.marginLeft = "5%";
container_message.element.style.height = (window.innerHeight / 100) * 10 + "px"; 
container_message.element.style.boxShadow = "0px 0px 7px 2px red";
container_message.element.style.padding = "10px";
container_message.element.style.borderRadius = "15px";
container_message.appendTo(document.body);

const message = new TEXTAREA();
message.element.style.width = "100%"; 
message.element.style.height = "70%"; 
message.element.style.backgroundColor = "black"
message.element.style.color = "white";
message.element.style.borderRadius = "10px";
message.element.style.fontSize = "16px"; 
message.element.style.padding = "10px"; 
message.element.style.resize = "none"; 
message.element.style.msOverflowStyle = "none";
message.element.style.scrollbarWidth = "none";
message.element.style.touchAction = 'none';
message.element.style.borderColor = "black";
message.element.style.bord = "none"
message.element.style.outline = "none"
message.appendTo(container_message.element);

const container_buton = new DIV();
container_buton.element.style.width = "100%"; 
container_buton.element.style.height = "30%"; 
container_buton.element.style.borderRadius = "10px";
container_buton.element.style.display = "flex";
container_buton.element.style.alignItems = "center";
container_buton.element.style.justifyContent = "right";
container_buton.appendTo(container_message.element);

const file = new IMG()
file.element.src = icon_post.file
file.element.style.height = "100%"
file.element.style.marginRight = "1%"
file.appendTo(container_buton.element)

const smail = new IMG()
smail.element.src = icon_post.smail
smail.element.style.height = "100%"
smail.element.style.marginRight = "1%"
smail.appendTo(container_buton.element)

const send = new IMG()
send.element.src = icon_post.send
send.element.style.height = "100%"
send.appendTo(container_buton.element)


let storage  = []
let storage_end = []
let intervalId; // Переменная для хранения ID интервала

storage =  await list(tag_post) 
storage = await massiveList(storage, key);
storage = await massiveUp (storage)
container_chat.element.innerHTML = "";
await constructor(container_chat, storage);
container_chat.element.scrollTop = container_chat.element.scrollHeight;

async function chat() {
    try {
    storage_end =  await list(tag_post) 
    storage_end = await massiveList (storage,key)
    storage_end = await massiveUp (storage_end)

    if(storage_end.length > storage.length){
        storage = storage_end
        container_chat.element.innerHTML = "";
        await constructor(container_chat, storage);
        container_chat.element.scrollTop = container_chat.element.scrollHeight;
    }
  } catch (error) {
    console.error("Ошибка в функции chat:", error);
  } 
}

// Функция для запуска интервала
function startChatInterval(params) {
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(() => {
      chat();
    }, 1000);
  }
  startChatInterval("your_tag_post_value");
  

send.element.addEventListener("click", async()=>{
    await new Promise(resolve => setTimeout(resolve, 100));
    let textToSave = escapeHtmlUp(message.element.value);
    textToSave = "^" + textToSave
    textToSave = CryptoJS.AES.encrypt(textToSave, key).toString();
    message.element.value = ""
    await add(tag_post,name_post,textToSave)
})
}
