import authPC from "./pc/auth.js";
import authMobile from "./mobile/auth.js";

export async function main(){
    document.body.style.backgroundColor = "black";
    document.documentElement.style.msOverflowStyle = "none";
    document.documentElement.style.scrollbarWidth = "none";
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundColor = "black";
    document.body.style.margin = "0";

    if(window.innerWidth > 1000){
    await authPC()
    }
    else{
     await authMobile()
    }
    
}