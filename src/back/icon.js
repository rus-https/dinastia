const fs = require('fs').promises;
const path = require('path');

async function ImageConvert(filePath) {
    try {
        const imageBuffer = await fs.readFile(filePath);
        const base64Image = 'data:image/png;base64,' + imageBuffer.toString('base64');
        return base64Image
    } catch (error) {
        console.error("Error encrypting image:", error);
    }
}

module.exports = async function post(req, res) {
        // Картинка главная
        const send = path.resolve(__dirname,'img/icon', 'send.png')
        const smail = path.resolve(__dirname,'img/icon', 'smail.png')
        const file = path.resolve(__dirname,'img/icon', 'file.png')
        const sendEnd = await ImageConvert(send);
        const smaildEnd = await ImageConvert(smail);
        const fileEnd = await ImageConvert(file);

        return res.json({ 
            send: sendEnd,
            smail: smaildEnd,
            file: fileEnd})
}