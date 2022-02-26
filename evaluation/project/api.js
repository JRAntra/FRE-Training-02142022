export const Api = (() => {
    const baseUrl = "http://localhost:3000";
    const path = "movies";

    const getPictures = () =>
       fetch([baseUrl, path].join("/")).then((response) => response.json());



    return {
        getPictures
    };
})();