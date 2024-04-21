# My Webserver

Simple project to setup a local webserver with nodejs and typescript.
The webserver should be able to expose 

## Dev 

Here are the steps followed

### Initial setup

```
npm init -y
npm install express
npm install --save-dev typescript ts-node @types/node @types/express
npx tsc --init
```

### Configure typescript 

Editing `tsconfig.json`

``` json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  },
  "include": ["src/**/*"]
}

```

Add `server.ts`

``` typescript
import express from 'express';
const app = express();
const port = 5500;
// Serve static files from 'public' directory
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});
```

### Starting the server

modify `package.json`

``` json
"scripts": {
  "start": "ts-node src/server.ts"
}
```

start the server with `npm start`

### Automatic reloading

install nodemo

``` bash
npm install --save-dev nodemon
```

configure nodemon by adding `nodemon.json`

``` json
{
    "watch": [
        "src"
    ],
    "ext": "ts",
    "exec": "ts-node ./src/server.ts",
    "ignore": [
        "src/**/*.spec.ts"
    ]
}
```

Edit the `scripts` section in your `package.json` to include a `dev` script that uses `nodemon`

``` json
"scripts": {
  "start": "ts-node src/server.ts",
  "dev": "nodemon"
}
```