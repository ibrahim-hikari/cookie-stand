`use strict`;

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',''];
var locationStore = [];
var table = document.getElementById('cookies')

function headerRow() {
    var tr = document.createElement('tr');
    for (let i = 0; i < hours.length; i++) {
        var th = document.createElement('th');
        th.textContent = hours[i-1];
        tr.appendChild(th);
    }

    th = document.createElement('th');
    th.textContent = 'Daily Location Total';
    tr.appendChild(th)
    table.appendChild(tr)
};


function Cities(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;

    this.hoursSalesArr = [];
    this.cookiesArr = [];
    this.cookiesSalesTotal = 0;
    locationStore.push(this);
}


Cities.prototype.assignRandomCookies = function () {
    for (var i = 0; i <= hours.length; i++) {

        var randomCookies = Math.ceil(Math.random() * (this.max - this.min) + this.min);
        this.cookiesArr.push(randomCookies);
    }

}
Cities.prototype.generateHourlySales = function () {
    this.assignRandomCookies();
    for (var i = 0; i < hours.length; i++) {
        var hourCookies = Math.ceil(this.cookiesArr[i] * this.avg);
        this.hoursSalesArr.push(hourCookies);
        this.cookiesSalesTotal += hourCookies;
    }
}

Cities.prototype.render = function () {
    this.generateHourlySales();
    var trName = document.createElement('tr');
    var tdName = document.createElement('td');
    tdName.textContent = this.name;
    trName.appendChild(tdName);
    for (var i = 0; i < (this.hoursSalesArr.length-1); i++) {
        var tdCell = document.createElement('td')
        trName.appendChild(tdCell)
        tdCell.textContent = this.hoursSalesArr[i];
    }

    var citiesCell = document.createElement('td');
    citiesCell.textContent = this.cookiesSalesTotal;
    trName.appendChild(citiesCell);
    table.appendChild(trName);
};

var seattle = new Cities('Seattle', 23, 65, 6.3);
var Tokoy = new Cities('Tokyo', 3, 24, 1.2);
var Dubai = new Cities('Dubai', 11, 38, 3.7);
var Paris = new Cities('Paris', 20, 38, 2.8);
var Lima = new Cities('Lima', 2, 16, 4.6);

function renderAll() {
    for (let i = 0; i < locationStore.length; i++) {
        locationStore[i].render();

    }
};

function footerRow() {
    var trFoot = document.createElement('tr');
    table.appendChild(trFoot);
    trFoot.textContent = 'Total';
    var finalTotal = 0;
    for (var i = 1; i < hours.length; i++) {
        var hourlyTotal = 0;
        for (var j = 0; j < locationStore.length; j++) {
            hourlyTotal = hourlyTotal + locationStore[j].hoursSalesArr[i];
            finalTotal += locationStore[j].hoursSalesArr[i];
            console.log(finalTotal);
        }
        var tdEle = document.createElement('td');
        tdEle.textContent = hourlyTotal;
        trFoot.appendChild(tdEle);
    }
    tdEle = document.createElement('td');
    tdEle.textContent = finalTotal;
    trFoot.appendChild(tdEle);
};
headerRow();
renderAll();
footerRow();

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