export function testAPIGet(userName) {
  return fetch(`https://api.github.com/users/${userName}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(response.status));
    })
    .then(user => user.name)
    .catch(error => `Sorry the API call returned ${error}`);
}
