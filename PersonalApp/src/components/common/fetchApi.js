//简单封装fetch
const fetchApi = (url, params) => {
  const msg = {
    path: url + '?' + new Date().getTime()
  };
  return new Promise((resolve, reject) => {
    fetch(msg.path)
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
