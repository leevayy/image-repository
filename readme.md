# Simple express.js image-server

## How to run:

1. Clone repository
2. `npm i express dotenv`
3. make .env file (use .env.example for reference, if you want to expose your server to the internet you need to open your port(by default 3333) `sudo ufw allow 3333` and use 0.0.0.0 for IP adress)
4. Add your images to `./images` folder or image directory you chose in .env
5. run `npm start`
6. Go to `localhost:3333`, you will see list of all images you added.
