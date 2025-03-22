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
        const emblem = path.resolve(__dirname,'img/icon', 'emblem.png')
        const emblem_end = await ImageConvert(emblem)

        return res.json({ 
            emblem: emblem_end})
}