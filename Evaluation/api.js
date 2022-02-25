export const Api = (() => {
    
    const baseUrl = "http://localhost:3000";
    const path = "movies";
    const movieList = [];

    const getTodos = () =>
        fetch([baseUrl, path].join("/")).then((response) => response.json())
        .then((data) => {
            movieList = data;
          })

    return {
        movieList
    }
})();

