import home_mobile from "./mobile/home.js";
import home_pc from "./pc/home.js";
import emblem from "../post/emblem.js";

export async function main() {
        document.body.style.backgroundColor = "black";
        document.documentElement.style.msOverflowStyle = "none";
        document.documentElement.style.scrollbarWidth = "none";
        document.body.style.backgroundPosition = "center center";
        document.body.style.backgroundColor = "black";
        document.body.style.margin = "0";
        const emblem_post = await emblem()
    
        if(window.innerWidth > 1000){
        await home_pc(emblem_post)
        }
        else{
        await home_mobile(emblem_post)
        }
        
    }