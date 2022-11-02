// creating objects in JS
var houseKeeper = {
experience : 2 ,
industry : 'Hotel',
workPermit : true,
hotelName : ['PC', 'Sheraton', 'Beach-Luxury']
    }


// creating constructor function in JS
function HouseKeeper(experience, industry, workPermit, hotelName) {
this.experience = experience; //constructor methods are identified by key word 'this.param'
this.industry = industry;
this.workPermit = workPermit;
this.hotelName = hotelName
this.clean = function () { // function with no name are anonymous function
alert('Cleaning in Progress')
  }
    }

//calling constructor function
var houseKeep = new HouseKeeper(12, 'Hotel', true, ['PC', 'Sheraton']);
