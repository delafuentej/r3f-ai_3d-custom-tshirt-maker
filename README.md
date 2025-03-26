# 3D Custom T-Shirt Maker

Design your own t-shirt, choose your favorite color, add photos and logos, and even have it designed by artificial intelligence (OpenAI) based on your instructions through a prompt. Once you're happy with your creation, you can download your design in .png format and use it however you like!


## Prerequisites
Make sure you have Node.js and npm installed on your machine.

- Node.js
- npm

## Installing
### Clone the repository:
```sh
git clone https://github.com/delafuentej/r3f-ai_3d-custom-tshirt-maker.git
```

### Navigate to the project directory:
```sh
cd r3f-ai_3d-custom-tshirt-makers
```

## Client Installation
### Change into the client directory:
```sh
cd client
```
### Install dependencies:
```sh
npm install
```

## Server Installation
### Change into the server directory:
```sh
cd server
```
### Install dependencies:
```sh
npm install
```
### Rename the ```.env.template``` file to ```.env```, and enter the environment variables PORT and OPENAI_API_KEY

## Running the Application
### Start the server:
```sh
nodeman start
```

### Start the client:
```sh
cd ../client
npm run dev