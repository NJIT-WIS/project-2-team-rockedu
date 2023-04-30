# A Basic Node.js Tutorial

Welcome to our basic Node.js tutorial! In this tutorial, we will walk through the fundamental concepts of Node.js and create a simple application. By the end of this tutorial, you should have a good understanding of how Node.js works and how to get started with it.

## Table of Contents

1. [Introduction to Node.js](#introduction-to-nodejs)
2. [Installation and Setup](#installation-and-setup)
3. [Creating Your First Node.js Application](#creating-your-first-nodejs-application)
4. [Modules in Node.js](#modules-in-nodejs)
5. [Conclusion](#conclusion)

## Introduction to Node.js

Node.js is an open-source, cross-platform, JavaScript runtime environment that allows you to run JavaScript code on the server-side. It is built on Chrome's V8 JavaScript engine and enables developers to create scalable network applications.

## Installation and Setup

To get started with Node.js, follow the steps below to install it on your system:

1. Go to the official Node.js website at [https://nodejs.org/](https://nodejs.org/).
2. Download the appropriate version for your operating system (LTS version is recommended for most users).
3. Install Node.js by following the installation prompts.
4. Verify the installation by running `node -v` and `npm -v` in your terminal or command prompt. This should display the installed Node.js and npm (Node Package Manager) versions.

## Creating Your First Node.js Application

Now that you've installed Node.js, let's create a simple "Hello, World!" application.

1. Create a new folder for your project and navigate to it in your terminal or command prompt.
2. Run `npm init` and follow the prompts to set up a `package.json` file for your project.
3. Create a new file called `app.js` in your project folder.
4. Add the following code to `app.js`:

```javascript
console.log("Hello, World!");
```

5. Run your application by typing node app.js in your terminal or command prompt. You should see "Hello, World!" printed to the console.

## Modules in Node.js
Modules are an essential part of Node.js applications. They allow you to split your code into reusable parts. Node.js has a built-in module system called "CommonJS."

To demonstrate how modules work, let's create a simple utility module:

1. Create a new file called `utility.js` in your project folder.
2. Add the following code to `utility.js`:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = {
  greet,
};

```
3. Now, let's import and use the `utility` module in `app.js`. Modify your `app.js` file as follows:

```javascript
const utility = require("./utility");

const greeting = utility.greet("John Doe");
console.log(greeting);

```

4. Run your updated application by typing `node app.js` in your terminal or command prompt. You should see `"Hello, John Doe!"` printed to the console.

## Conclusion
Congratulations! You have successfully set up Node.js, created a simple application, and learned about modules. There's much more to explore in the world of Node.js, so keep learning and experimenting. Good luck on your Node.js journey!