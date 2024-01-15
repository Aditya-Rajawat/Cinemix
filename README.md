# Netgflix GPT

- Create React App
- Configure Tailwind CSS
- Configured Header 
- App routing
- Login Form (signin/signup form)
- Validations (for input fields in the form)
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create Sign up user account
- Implement sign in user API
- Create our redux store with user slice
- Implemented Signout
- Update Profile
- Bugfix: Sign up user displayname update
- Bugfix: if the user is not logged in redirect /browse to login page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants.js file
- Register for TMDB api and create an API and get access token
- Get data from TMDB now playing movies list API
- Custom hook for now playing movies
- Create movieSlice
- Update store for movies data
- Planning for main container and secondary container
- fetch data for trailer video
- update store with trailer video data
- embedded the youtube video and made it autoplay and mute and disabled actions
- build secondary component
- build movie card
- TMBD image cdn url
- built the browse page and also built the carousel for the movies scroll
- custom hook for popular movies
- Designed hover card for each category
- design a movie card info component to display the movie info such as genre and rated upon hovering
- Designed a Add to My List functionality and my list page, along with it the remove from My list functionality.
- design a top 10 HOC to display over the movie card if the movie has a popularity > 1500
- Added a search bar integrated with openAI to fetch the results as per the query and page
- Added a multilanguage feature
- More info modal component
- Fully responsive site
- Added footer for all pages
- Added loading spinner while searching for movies


# Features

- Login/Signup
    - Signin/Signup Form
    - redirect to browse page
- Browse (after authentication)
    - Header
    - Main Movie
        - Trailer in background
        - Title & description
        - Movie Suggestions
            - MovieLists *N (vertically scrollable)

- Netflix GPT
    - Search bar
    - Movie Suggestions