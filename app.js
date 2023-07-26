import fs from 'fs';
import path from 'path';
import express from 'express';
import 'dotenv/config';

const app = express();
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif'] 
const imageDir = process.env.IMAGE_DIR;
const serverIP = process.env.SERVER_IP;
const serverPort = process.env.SERVER_PORT;

app.get('/', (req, res) => {
    fs.readdir(imageDir, (err, files) => {
        if (err) {
            res.status(500).send("Internal Server Error");
            return;
        }
        
        const imageFiles = files.filter((file) => {
            const ext = path.extname(file); 
            return imageExtensions.includes(ext);
        });

        const imageLinks = imageFiles.map((file) => {
            return '<li><a href="' + file + '">' + file + '</a></li>'; 
        }).join('');

        res.send('<ul>' + imageLinks + '</ul>');
    });
});

app.use('/', express.static(imageDir)); // Serve the images as static files

app.listen(serverPort, serverIP, () => {
   console.log(`Server running at http://${serverIP}:${serverPort}/`);
});
