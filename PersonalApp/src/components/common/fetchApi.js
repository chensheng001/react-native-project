//简单封装fetch
const fetchApi = (url, params) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(respone => {
        return respone.json();
      })
      .then(responseJson => {
        resolve(responseJson);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      });
  });
};

export default fetchApi;
