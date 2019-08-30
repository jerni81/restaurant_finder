<h3>Project Description</h3>

This is the app that will get you out to dinner quicker if your indecisive and cant decide where to go. if you supply you location the app with pull information from yelp to get 50 restaurants within your area. Out of those 50 the choices will be randomly narrowed down to 8 and presented as possible choices. The user then selects any number of the choices and submits them for a final decision which is then generated for you.

<h3>Projects Links</h3>

- [github repo](https://github.com/jerni81/restaurant_finder)
- [deployment](http://ajs-restaurant-finder.surge.sh/)

<h3>API Info</h3>

The API being used for this project will be the Yelp Fusion V3 API. I will be using this API to retrieve restaurants in a certain city or area code that the user suggest.

Link:
https://api.yelp.com/v3/businesses/search?term=restaurants&location=(user-input)&open_now=true&limit=50

Note: In order to access the API user needs to provide their own API key for this variable REACT_APP_YELP_KEY

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

<h3>MVP/Post MVP

<h5>MVP</h5>
- create all the components<br>
- make the API call <br>
- make methods to update state <br>
- pass down props

<h5>Post MVP</h5>
- add a redo button to Footer<br>
- create a reveal effect for choice

<h3>Time/Priority Matrix</h3>


| Component| Priority | Estimated Time | Actual Time |
| --- | --- | --- | --- |
| Adding Header | H | 1hr | .5hr |
| Adding Main | H | 3hr | 6hr |
| Adding Form | H | 2hr | 6hr |
| Adding Options | H | 3hr | 5hr |
| Adding Choice | H | 2hr | 3hr |
| Adding Footer | L | 1hr |. 5 hr|
| Working with API | H | 3hr | 3hr |
| Styling Components | L | 4hr | 8hr |
| Total | H | 19hr | 32hrs |

<h3>Components</h3>

| Component | Function |
| --- | --- |
| App | App will hold the 2 components Header and Main.|
| Header | Header will be present throughout the user experience, and will hold the App name. |
| Main | Main will be the brains of the App. It will hold state, contain the API call, and be the Router for the rest of the components. |
| Form | Form will be the initial page displaying in Main, and will have a user input box and submit button. It will update state with the user input.|
| Options | Options will be passed down props from main with the user input and render 8 choices for the user to narrow down, and select 3. Then update state with the three user choices.|
| Choice | Choice will be passed down props from state with which of the 3 user selections was randomly picked for the users dinner destination.|
| Footer | Footer will display a message at the end of Choice saying lets go eat, or choose again and allow the user to restart the process. |
