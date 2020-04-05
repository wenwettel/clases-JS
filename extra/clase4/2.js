const getApiInfo = fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=8295da18e99c02ca67f968afce718533&language=en-US&page=1');

getApiInfo
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data, 'data');
    console.log(data.results[0].original_title, 'titulo original')
    console.log(data.results[0].overview, 'Descripcion');
    console.log(data.results[0].poster_path, 'imagen');
    
    const original_title = data.results[0].original_title;
    const overview = data.results[0].overview;
    const poster_path = data.results[0].poster_path;
    const h1 = document.getElementsByTagName("h1")[0];
    const p = document.getElementsByTagName("p")[0];
    const img = document.getElementsByTagName("img")[0];
    h1.innerHTML = original_title;
    p.innerHTML = overview;
    img.src = 'https://image.tmdb.org/t/p/w500'+poster_path;
  });


