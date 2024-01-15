export const PROFILE_ICON =
  "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdGl8JNJEQU_OJ8akP1B7WVn0vvPb4nekAgMrQCxnK7oILuo1YIOrKhmTc8bvPQRIGPjO-ZuJOIJVP9L2QbClJX4kUL3hN2qEASD.png?r=a16";

export const NETFLIX_LOGO_BROWSE =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LOGIN_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const NETFLIX_LOGO_LOGIN =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDBKEY,
  },
};

export const MOVIE_CARD_IMG_CDN = "https://image.tmdb.org/t/p/original/";

export const FALLBACK_IMG = "https://media.wired.com/photos/592722c1af95806129f51b71/master/w_1600,c_limit/MIT-Web-Loading.jpg";

export const API_KEY = process.env.REACT_APP_APIKEY;

export const LANGUAGES_SUPPORTED = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
  {
    identifier: "french",
    name: "French",
  },
];

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;

