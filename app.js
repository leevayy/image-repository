import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif'] 
const imageDir = './images/';
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

app.listen(3333, () => {
   console.log('Server running at http://localhost:3333/');
});
