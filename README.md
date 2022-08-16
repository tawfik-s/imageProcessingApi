# imageProcessingApi

image processing api for resizeing images and return endpoint to access the image using it

## Setup Steps

To get started:

1-clone the repo on the machine

2-install all dependencies by running 'npm install' command

3-run npm test to test and build the project all tests must success

4-but the images you want to resize in the images/full folder

#### Runing the program locally in development mode

`npm run start`

-and then head to your browser at `localhost:3000` and it should be working.

#### Test the app

    npm run test

#### Runing the program locally in production mode

`npm run build`

`node dist/index.js`

#### Code formating

I'm using prettier
npm run prettier
I'm using eslint
npm run lint

### you can use this api using all of this images

• encenadaport.jpg
• fjord.jpg
• icelandwaterfall.jpg
• palmtunnel.jpg
• santamonica.jpg

### Examples

1)`http://localhost:3000/api/image_resize?name=fjord.jpg&height=300&width=300`

(retrieve the image with hight=300 and width=300 which name fjord.jpg_height300_width300.jpg if you use image format he will use it)

2)`http://localhost:3000/api/image_resize?name=fjord&height=300&width=300`

(you can also use it without image format he will make it default jpg)

####scripts
`npm run test` to test the project
`npm run build` convert typescript to javascript in dist folder
`npm run run` build and run the project
`npm lint` run eslint
`npm run prettier`
