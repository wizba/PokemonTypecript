# TypeScript Project Setup

## Description

This project is a simple TypeScript setup with Node.js. The project is configured to compile TypeScript files and serve them using `live-server`.

## Prerequisites

Make sure you have the following installed on your system:

- Node.js (https://nodejs.org/)
- npm (Node Package Manager, comes with Node.js)
- TypeScript (https://www.typescriptlang.org/)
- live-server (https://www.npmjs.com/package/live-server)

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

Install the necessary npm packages:

``npm install``

### 3. Configure TypeScript

Ensure you have a tsconfig.json file with the following content:
```
{
"compilerOptions": {
"target": "es5",
"module": "commonjs",
"strict": true,
"esModuleInterop": true,
"outDir": "dist"
},
"include": [
"src/**/*.ts"
]
}
```

### 4. Add a .gitignore File

Create a .gitignore file to exclude the node_modules and dist directories:

node_modules/
dist/


# Ignore node_modules
node_modules/

# Ignore dist folder
dist/
## 5. Add Scripts to package.json
Make sure your package.json has the following scripts:
```
{
  "name": "typescript",
  "version": "1.0.0",
  "description": "",
  "main": "./src/app.ts",
  "scripts": {
    "start": "tsc && live-server --port=8080 src",
    "build": "tsc"
  },
  "author": "",
  "license": "ISC"
}
```
## 6. Start the Project
To start the project, run the following command:
```npm start```
This command will compile the TypeScript files and start the live-server on port 8080, serving the src directory.

## 7. Build the Project
To build the project without starting the server, run:

```npm run build```
This will compile the TypeScript files into JavaScript and output them to the dist directory.

Project Structure

```
typescript/
│
├── src/
│   ├── app.ts
│   └── ...
├── dist/
├── node_modules/
├── package.json
├── tsconfig.json
└── .gitignore
```