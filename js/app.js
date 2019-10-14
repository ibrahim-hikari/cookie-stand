var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
function Cities(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.hoursSales = [];
    this.cookies = 0;
    this.cookiesSales = 0;
    this.assignRandomCookies();
    this.generateHourlySales();
    this.render();
}


Cities.prototype.assignRandomCookies = function () {
    var randomCookies = Math.ceil((Math.random() * (this.max - this.min) + this.min) * this.avg);
    this.cookies = randomCookies;
    return this.cookies;

}
Cities.prototype.generateHourlySales = function () {
    for (var i = 0; i < hours.length; i++) {
        var hourCookies = Math.ceil(this.assignRandomCookies() * this.avg);
        this.hoursSales.push(hourCookies);
        this.cookiesSales += hourCookies;
    }
}

Cities.prototype.render = function () {

    var container = document.getElementById('famous')
    var article = document.createElement('article');
    container.appendChild(article)

    var table = document.createElement(table)
    article.appendChild(table);


    var headerRow = document.createElement('tr')
    table.appendChild(headerRow);

    for (var i = -1; i < hours.length; i++) {

        var th = document.createElement('th')
        table.appendChild(th)
        th.textContent = hours[i];
    }

    var citiesRow = document.createElement('tr');
    table.appendChild(citiesRow);
    citiesRow.textContent = this.name;

    var cellContent = document.createElement('td')
    th.appendChild(cellContent);
    cellContent.textContent = this.hoursSales;

}

var seattle = new Cities('Seattle', 23, 65, 6.3);
var Tokoy = new Cities('Tokyo', 3, 24, 1.2);
var Dubai = new Cities('Dubai', 11, 38, 3.7);
var Paris  = new Cities('Paris', 20, 38, 2.8);
var Lima = new Cities('Lima', 2, 16, 4.6);
// console.log(anyarr[0])


//   Kitten.prototype.render = function() {

//     var container = document.getElementById('kittenProfiles')
//     var article = document.createElement('article');
//     container.appendChild(article);

//     var h2 = document.createElement('h2');
//     article.appendChild(h2);
//     h2.textContent = this.name;

//     var p = document.createElement('p');
//     article.appendChild(p);
//     p.textContent = `${this.name} is adorable and is ${this.age} months old`;

//     // do the list
//     var timeList = document.createElement('ul');
//     article.appendChild(timeList);

//     for(var i = 0; i < this.time.length; i++) {
//       var time = this.time[i];
//       var listItem = document.createElement('li');
//       timeList.appendChild(listItem);
//       listItem.textContent = time;
//     }


//     // do the table
//     var table = document.createElement('table');
//     article.appendChild(table);

//     // header row
//     var headerRow = document.createElement('tr');
//     table.appendChild(headerRow);

//     var kidsHeader = document.createElement('th');
//     headerRow.appendChild(kidsHeader);
//     kidsHeader.textContent = 'Good with kids';

//     var dogsHeader = document.createElement('th');
//     headerRow.appendChild(dogsHeader);
//     dogsHeader.textContent = 'Good with dogs';

//     var catsHeader = document.createElement('th');
//     headerRow.appendChild(catsHeader);
//     catsHeader.textContent = 'Good with other cats';


//     var dataRow = document.createElement('tr');
//     table.appendChild(dataRow);

//     var kidsData = document.createElement('td');
//     dataRow.appendChild(kidsData);
//     kidsData.textContent = this.goodWithKids;

//     var dogsData = document.createElement('td');
//     dataRow.appendChild(dogsData);
//     dogsData.textContent = this.goodWithDogs;

//     var catsData = document.createElement('td');
//     dataRow.appendChild(catsData);
//     catsData.textContent = this.goodWithCats;

//     // do the image
//     var img = document.createElement('img');
//     article.appendChild(img);
//     img.setAttribute('src', this.image);
//   }



  // store all kittens, notice last kitten was not first stored in a variable

//   for(var i = 0; i < kittens.length; i++) {
//     kittens[i].render();
//   }





















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