export const Api = (() => {
    const baseUrl = "http://localhost:3000";
    const path = "pictures";

    const getPictures = () =>
        fetch([baseUrl, path].join("/")).then((response) => response.json());


    const addPicture = (newPictures) => fetch([baseUrl, path].join("/"), {
        method: 'POST',
        body: JSON.stringify(newPictures),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      
        .then((response) => response.json());

    return {
        getPictures,
        addPicture
    };
})();