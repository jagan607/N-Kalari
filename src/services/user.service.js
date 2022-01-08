


export const userService = {
    getTransactions,
  };

  async function getTransactions(){
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
    
      const response = await fetch(
        'https://run.mocky.io/v3/581dbe53-1cb7-48ff-809b-8def656ef9dd',
        requestOptions
      );
      
      return await handleResponse(response);
  }

  function handleResponse(response) {
    return response.text().then((text) => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {

        //   logout();
        }
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    });
  }