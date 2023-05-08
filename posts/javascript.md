---
title: 'Building a Simple Single-Page Application (SPA) with JavaScript'
date: '2023-04-28'
image: '/NJIT-WIS/project-2-team-rockedu/public/images/javascript.png'
author: 'Ramya Kammari'
authorImage: '/NJIT-WIS/project-2-team-rockedu/public/images/ramya.jpeg'
description: "Learn how to build a simple Single-Page Application (SPA) using JavaScript and the popular Vue.js framework with this step-by-step tutorial. Enhance your web development skills and create seamless, dynamic user experiences by building a SPA from scratch today."
---


# Building a Simple Single-Page Application (SPA) with JavaScript

In this tutorial, we'll walk through the steps of building a simple Single-Page Application (SPA) using JavaScript and the popular Vue.js framework. Single-page applications offer a more seamless user experience, as they load a single HTML page and dynamically update it as the user interacts with the app. Let's dive in!

## Table of Contents
1. [Prerequisites](#Prerequisites)
2. [Setting Up the Project](#Setting-Up-the-Project)
3. [Creating the Components](#Creating-the-Components)
4. [Adding Routing](#Adding-Routing)
5. [Building the SPA](#building-the-spa)
6. [Conclusion](#Conclusion)

## Prerequisites
Before getting started, make sure you have the following installed:

- Node.js (v12 or higher)
- npm (v6 or higher)
- Vue CLI (v4 or higher)

You can check your current versions with the following commands:

```bash
node -v
npm -v
vue -V

```

## Setting Up the Project
First, create a new project using Vue CLI by running the following command:

```bash
vue create my-spa
```

Navigate to the newly created project directory:

```bash
cd my-spa
```

Next, install the Vue Router package, which we'll use to handle routing in our SPA:
```bash
npm install vue-router
```

## Creating the Components

In the src folder, create a new folder named components. Inside the components folder, create the following three component files:

- Home.vue
- About.vue
- Contact.vue

### Home.vue
```html
<template>
  <div>
    <h2>Welcome to the Home Page</h2>
    <p>This is the home page of our simple SPA.</p>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

```

### About.vue
```html
<template>
  <div>
    <h2>About Us</h2>
    <p>Learn more about our team and our mission.</p>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

```

### Contact.vue
```html
<template>
  <div>
    <h2>Contact Us</h2>
    <p>Get in touch with us for any inquiries.</p>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

```
## Adding Routing

Create a new folder named `router` inside the `src` folder, and create a new file named `index.js` inside the `router` folder. This file will handle the routing for our SPA.

```javascript
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

```

Now, open the `src/main.js` file and import the router:

```javascript
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
router,
render: (h) => h(App),
}).$mount("#app");

## Building the SPA <a name="building-the-spa"></a>

Now, let's modify the `src/App.vue` file to include our navigation and router-view:

```html
<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Add some basic styling */
nav {
  background-color: #f8f9fa;
  padding: 1rem;
}

nav ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin-right: 1rem;
}

nav li a {
  text-decoration: none;
  color: #007bff;
}

nav li a:hover {
  text-decoration: underline;
}
</style>
```
## Building the SPA
Now, let's modify the `src/App.vue` file to include our navigation and router-view:
```javascript
<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Add some basic styling */
nav {
  background-color: #f8f9fa;
  padding: 1rem;
}

nav ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin-right: 1rem;
}

nav li a {
  text-decoration: none;
  color: #007bff;
}

nav li a:hover {
  text-decoration: underline;
}
</style>
```

Now, run the project by executing the following command:

```bash
npm run serve
```

Open your browser and navigate to http://localhost:8080. You should see the navigation bar and the home page. Click on the different navigation links to see the content change dynamically without reloading the page.



## Conclusion
Congratulations! You've successfully built a simple Single-Page Application (SPA) using JavaScript and Vue.js. You can now extend this project with more features, components, and routes to build a more complex application. 

### Happy coding!



