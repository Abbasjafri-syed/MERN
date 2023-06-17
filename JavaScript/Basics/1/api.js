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

// API Calling with fetch

// fetch method returns a promise
// promise is either ongoing, fulfilled or reject

// link to html source
let jokes = document.querySelector('#joke');
let jokebtn = document.querySelector('#jokebtn');


// Promise api calling
fetchapi = () => {

    const setHeader = { // setting data type to be returned as object
        headers: {
            Accept: 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com/', setHeader) // returns a promise
        .then((res) => res.json()) // data is retreived as an object
        .then((data) => {
            jokes.innerHTML = data.joke; // showing specific element inside the object
            // console.log(data); // method to convert object into JSON
        })
        .catch((err) => { // if promise is not resolved then error is catched here
            console.log(err);
        })
}
jokebtn.addEventListener('click', fetchapi); // data from api will be called after event fired
fetchapi(); // calling functio


// async await api calling through 

asyncapi = async () => {
    const setHeader = { // setting data type to be returned as object
        headers: {
            Accept: 'application/json'
        }
    }
    try {
        api = await fetch('https://icanhazdadjoke.com/', setHeader); // waiting for the return to be promised
        data = await api.json(); // waiting for the data to be converted to object
        jokes.innerHTML = await data.joke;
        console.log(data);
    } catch (err) { // if promise is not resolved then error is catched here
        console.log(err); //
    }
}

jokebtn.addEventListener('click', asyncapi); // data from api will be called after event fired
asyncapi(); // calling function for first time at time of loading


console.log(jsonObject);

objectJSON = JSON.parse(jsonObject); // method to convert JSON into object
console.log(objectJSON);
