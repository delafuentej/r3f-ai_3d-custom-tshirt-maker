# 3D Custom T-Shirt Maker

Design your own t-shirt, choose your favorite color, add photos and logos, and even have it designed by artificial intelligence (OpenAI) based on your instructions through a prompt. Once you're happy with your creation, you can download your design in .png format and use it however you like!

## 🎬 Gif Demo

![App Demo](client/src/assets/readme/gif1.gif)

## 🖼️ Sample Generated T-Shirts

<img src="client/src/assets/readme/tshirt1.webp" width="250"/><img src="client/src/assets/readme/tshirt2.webp" width="250"/><img src="client/src/assets/readme/tshirt3.webp" width="250"/><img src="client/src/assets/readme/tshirt4.webp" width="250"/><img src="client/src/assets/readme/tshirt5.webp" width="250"/><img src="client/src/assets/readme/tshirt6.webp" width="250"/>

## 🛠️Tech Stack

🔹 Frontend:
React, Three.js, React Three Fiber, Tailwind CSS 4, Valtio (state management), Framer Motion (animations), React Color (color picker), Drei & Maath (3D utilities).

🔹 Backend:
Node.js, Express, OpenAI API, dotenv, cors, nodemon.

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

### Rename the `.env.template` file to `.env`, and enter the environment variables PORT and OPENAI_API_KEY

## Running the Application

### Start the server:

```sh
nodemon start
```

### Start the client:

```sh
cd ../client
npm run dev
```
