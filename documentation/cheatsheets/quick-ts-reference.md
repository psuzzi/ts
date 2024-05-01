# Quick Typescript Reference Guide

Here's a concide reference guide that can help you get started with TypeScript programming. 

## Documentation

[Official Documentation](https://www.typescriptlang.org/docs/) 

## Development Environemnt Setup

- Node.js: download and install from [Node.js Official Website](https://nodejs.org/en)
- TypeScript installation: install it globally with npm " 

```sh
npm install -g typescript
```

- IDE: Visual Studio Code is highly recommended for TS development, with some extensions
    - Typescript TSLint Plugin
    - Path Intellisense
    - ESLint

## Basic Compilation Command

basic 
```sh
tsc helloworld.ts
```
watch mode
```sh
tsc --watch helloworld.ts
```

tsconfig.json: manage project compilation setting. Generate it using:

```hs
tsc --init
```

## Libraries and Tools

DefinitelyTyped: repo for high quality TS type-definitions. 
