// method for API calling
// needs to be in html else will give quirk mode error

// let API = new XMLHttpRequest(); // method to make a request for api calls
// API.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=London&mode=json'); //getting data from url

// API.addEventListener('load', () => { // API called after loading
//   const [data] = JSON.parse(API.responseText); // data in string parsed as JSON object
//   // const data = API.responseText; // data in strings
//   // const data = JSON.stringify(API.responseText) // data to be changed into string
//   // console.log(data);
// });

// API.send(); // API call send..


// visualisation of position nam

//beforbegin means gives data before an element start
// afterbegin means gives data right after an element start
// beforeend means gives data before an element end
// afterend means gives data after an element end

// divid.insertadjacentHTML('afterbegin', elementData); // method to retrieve data at a specific position


// JSON

object = {
  name: 'abc',
  roll: 23,
  class: 'xyz',
  section: 5
};
console.log(object);

jsonObject = JSON.stringify(object); // method to convert object into JSON
console.log(jsonObject);

objectJSON = JSON.parse(jsonObject); // method to convert JSON into object
console.log(objectJSON);
