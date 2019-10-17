`use strict`;

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var container = document.getElementById('cookies');
var table = document.createElement('table');
container.appendChild(table);

function Cities(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;

    this.hoursSalesArr = [];
    this.cookiesArr = [];
    this.cookiesSalesTotal = 0;
    this.assignRandomCookies();
    this.generateHourlySales();
}


Cities.prototype.assignRandomCookies = function () {
    for (var i = 0; i <= hours.length; i++) {

        var randomCookies = Math.ceil(Math.random() * (this.max - this.min) + this.min);
        this.cookiesArr.push(randomCookies);
    }

}
Cities.prototype.generateHourlySales = function () {
    for (var i = 0; i < hours.length; i++) {
        var hourCookies = Math.ceil(this.cookiesArr[i] * this.avg);
        this.hoursSalesArr.push(hourCookies);
        this.cookiesSalesTotal += hourCookies;
    }
}


/////////  Table's Header Part /////////
function headerRow() {

    var trHead = document.createElement('tr');
    table.appendChild(trHead);

    var thHead = document.createElement('th');
    trHead.appendChild(thHead);
    thHead.textContent = '***'

    for (var i = 0; i < hours.length; i++) {

        thHead = document.createElement('th');
        trHead.appendChild(thHead);
        thHead.textContent = hours[i];
    }

    thHead = document.createElement('th');
    trHead.appendChild(thHead);
    thHead.textContent = 'Daily Location Total';
};

//////// Data part ////////////
Cities.prototype.render = function () {

    var trData = document.createElement('tr');
    table.appendChild(trData);

    var tdData = document.createElement('td');
    trData.appendChild(tdData);
    tdData.textContent = this.name;

    for (var i = 0; i < hours.length; i++) {
        tdData = document.createElement('td')
        trData.appendChild(tdData)
        tdData.textContent = this.hoursSalesArr[i];
    }

    tdData = document.createElement('td');
    trData.appendChild(tdData);
    tdData.textContent = this.cookiesSalesTotal;
};

// ///////////// Table's footer part ///////////

function footerRow(table) {

    var trFoot = document.createElement('tr');
    table.appendChild(trFoot);

    var tdFoot = document.createElement('td')
    trFoot.appendChild(tdFoot);

    tdFoot.textContent = 'Total';

    var totalAll = 0;

    for (var index = 0; index < hours.length; index++) {

        tdFoot = document.createElement('td');
        trFoot.appendChild(tdFoot);

        var hourlyTotal = 0;

        for (var jndex = 0; jndex < cities.length; jndex++) {
            hourlyTotal += cities[jndex].hoursSalesArr[index];
        }

        tdFoot.textContent = hourlyTotal;

        totalAll += hourlyTotal;
    }

    tdFoot = document.createElement('td')
    trFoot.appendChild(tdFoot);
    tdFoot.textContent = totalAll;
};
var cities = []
cities.push(new Cities('Seattle', 23, 65, 6.3));
cities.push(new Cities('Tokyo', 3, 24, 1.2));
cities.push(new Cities('Dubai', 11, 38, 3.7));
cities.push(new Cities('Paris', 20, 38, 2.8));
cities.push(new Cities('Lima', 2, 16, 4.6));
// var locationStore = [seattle, Tokoy, Dubai, Paris, Lima];

// /////////////// ////////////
headerRow(table);

for (let k = 0; k < cities.length; k++) {
   
    var towns = cities[k];
    towns.render();
    
}


footerRow(table);

function formNew(event) {
    event.preventDefault();
    
    var cityName = event.target.name.value;
    var min = parseInt(event.target.min.value);
    var max = parseInt(event.target.max.value);
    var avg = parseFloat(event.target.avg.value);
    
    var newC = new Cities(name,min,max,avg)

    cities.push(newC);

    table.removeChild(trFoot)

    cityName.render(table);

    footerRow();
}
 var form = document.getElementById('newC')
 form.addEventListener('submit', formNew)



// var Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
//    '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// var seattle = {
//    Min: 23,
//    Max: 65,
//    Avarge: 6.3,
//    cookiesArray: [],
//    Ramdom: function () {
//        var range = this.Max - this.Min;
//        var rand = Math.floor(Math.random() * range) + this.Min;
//        return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//        for (i = 0; i < 15; i++) {
//            this.amountOfCookiesCeil = Math.ceil(this.Avarge * this.Ramdom());
//            this.cookiesArray.push(this.amountOfCookiesCeil);
//        }
//        return this.cookiesArray;
//    },
// }
// seattle.amountOfCookiesPerHourFunction();
// var Tokyo = {
//    Min: 3,
//    Max: 24,
//    Avarge: 1.2,
//    cookiesArray: [],
//    Random: function () {
//        var range = this.Max - this.Min;
//        var rand = Math.floor(Math.random() * range) + this.Min;
//        return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//        for (i = 0; i < 15; i++) {
//            this.amountOfCookiesCeil = Math.ceil(this.Avarge * this.Random());
//            this.cookiesArray.push(this.amountOfCookiesCeil);
//        }
//        return this.cookiesArray;
//    },
// }
// Tokyo.amountOfCookiesPerHourFunction();
// var Dubai = {
//    Min: 11,
//    Max: 38,
//    Avarge: 3.7,
//    cookiesArray: [],
//    Random: function () {
//        var range = this.Max - this.Min;
//        var rand = Math.floor(Math.random() * range) + this.Min;
//        return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//        for (i = 0; i < 15; i++) {
//            this.amountOfCookiesCeil = Math.ceil(this.Avarge * this.Random());
//            this.cookiesArray.push(this.amountOfCookiesCeil);
//        }
//        return this.cookiesArray;
//    },
// }
// Dubai.amountOfCookiesPerHourFunction();
// var Paris = {
//    Min: 20,
//    Max: 38,
//    Avarge: 2.3,
//    cookiesArray: [],
//    Random: function () {
//        var range = this.Max - this.Min;
//        var rand = Math.floor(Math.random() * range) + this.Min;
//        return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//        for (i = 0; i < 15; i++) {
//            this.amountOfCookiesCeil = Math.ceil(this.Avarge * this.Random());
//            this.cookiesArray.push(this.amountOfCookiesCeil);
//        }
//        return this.cookiesArray;
//    },
// }
// Paris.amountOfCookiesPerHourFunction();
// var Lima = {
//    Min: 2,
//    Max: 16,
//    Avarge: 4.6,
//    cookiesArray: [],
//    Random: function () {
//        var range = this.Max - this.Min;
//        var rand = Math.floor(Math.random() * range) + this.Min;
//        return rand;
//    },
//    amountOfCookiesPerHourFunction: function () {
//        for (i = 0; i < 15; i++) {
//            this.amountOfCookiesCeil = Math.ceil(this.Avarge * this.Random());
//            this.cookiesArray.push(this.amountOfCookiesCeil);
//        }
//        return this.cookiesArray;
//    },
// }
// Lima.amountOfCookiesPerHourFunction();
// arrayall = ["seattle", "Tokyo", "Dubai", "Paris", "Lima"];
// arrayall1 = [seattle, Tokyo, Dubai, Paris, Lima];
// for (let j = 0; j < arrayall.length; j++) {
//    var count = 0;
//    document.write("<h2>", "* ", arrayall[j], "</h2>");
//    document.write("<ul>");
//    for (i = 0; i < 15; i++) {
//        count += arrayall1[j].cookiesArray[i];
//        document.write("<li>");
//        document.write(Hours[i], ": ", arrayall1[j].cookiesArray[i], " Cookies.");
//        document.write("<br>");
//        document.write("</li>");
//    }
//    document.write("<li>", "Total : ", count, " Cookies.");
//    document.write("</ul>");
// }