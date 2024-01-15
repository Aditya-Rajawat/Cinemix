# *Cinemix*

- *Cinemix is a fully responsive web application thatrecommends movies via GPT-3.5 turbo. Users can Login/Logout using
Firebase authentication. TMDB API is used forfetching movie data. Tailwind CSS is used to design and style the UI
components. Redux Toolkit is used for managing the state of loggedIn users, movies data as well data required at the
config level by the application*

- *Live : https://cinemix-app.netlify.app/*
  
- *Tech Stack : OpenAI, ReactJS, Firebase, TMDB API, Tailwind CSS, Redux Toolkit*


# *Setting up the project*

- Created create-react-app from scratch via. npm, webpack
 
- Install tailwindcss via npm, and create your tailwind.config.js file
  ```
  npm install -D tailwindcss
  npx tailwindcss init
  ```
  
- Configure your template paths
  ```
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```
  
- Add the Tailwind directives to your CSS
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
  
- Install React Router DOM
  ```
  npm i react-router-dom
  ```
  

# *Features*

- **Login/Signup**
    - Signin/Signup Form
    - Redirect to browse page
- **Browse (after authentication)**
    - Header
    - Main Movie
        - Trailer in background
        - Title & Description
        - Movie Suggestions
            - MovieLists (vertically scrollable)

- **Cinemix GPT**
    - Search bar
    - Movie Suggestions
