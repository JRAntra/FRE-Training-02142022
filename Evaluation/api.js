
 export const Api = (() => {
    // const baseUrl = "https://jsonplaceholder.typicode.com";
    const baseUrl = "http://localhost:3000";
    const path = "movies";

    const getMovies = () =>
        fetch([baseUrl, path].join("/")).then((response) => response.json());

    const rightMovies = (newmovie) => fetch([baseUrl, path].join("/"), {
        method: 'POST',
        body: JSON.stringify(newmovie),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json());

    const leftMovies = (newmovie) => fetch([baseUrl, path].join("/"), {
        method: 'POST',
        body: JSON.stringify(newmovie),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json());

    return {
        getMovies,
        rightMovies,
        leftMovies
    };
})();