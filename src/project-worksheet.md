<h3>API Info</h3>

The API being used for this project will be the Yelp Fusion V3 API. I will be using this API to retrieve restaurants in a certain city or area code that the user suggest.

Link:
https://api.yelp.com/v3/businesses/search?term=restaurants&location=(user-input)&open_now=true&limit=50

Code Sample:
```js
makeApiCallYelp = async () => {
  let source = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${this.state.value}&open_now=true&limit=50`
  let key = process.env.REACT_APP_YELP_KEY;
  let response = await axios.get(source, {
    headers: {
      'Authorization' : `Bearer ${key}`,
    }
  });
  console.log(response);
  }
  ```

  <h3>Wireframes</h3>

  ![](https://i.imgur.com/hPiqDHk.jpg)

  ![](https://i.imgur.com/pmd8zZO.jpg)

  ![](https://i.imgur.com/ddkTwSv.jpg)

  ![](https://i.imgur.com/O7rsdE0.jpg)

  <h3>Time/Priority Matrix</h3>

  
