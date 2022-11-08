# redux-movies-app
Follow the [youtube tutorial](https://www.youtube.com/watch?v=2kL28Qyw9-0&list=PLTP3E5bPW797uMryjgPqSZsQkxU0s6gu2&index=11) to develop a movie app using React and Redux.
## api 
[OMDb API (The Open Movie Database)](https://www.omdbapi.com/)

## folders
+ `common` : store the OMDb API, API Key, and the common use colors
+ `features`: store the redux logic inside.
+ `components`: every single component has it own folder, includes `[name].js` and `[name].scss`

## routes
```jsx
<Header />
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:imdbID" element={<MovieDetail />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
<Footer />
```

## dependencies
+ redux
+ node-sass
+ axios
+ react-router-dom
## screenshot
![screenshot](./src/images/screenshot.png)