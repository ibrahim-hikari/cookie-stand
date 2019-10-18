`use strict`;

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var container = document.getElementById('cookies');
var table = document.createElement('table');
container.appendChild(table);

var foot;

function addElement(tagName, container, text) {
    var element = document.createElement(tagName);
    container.appendChild(element);

    if (text) {
        element.textContent = text;
    }

    return element;
}

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

Cities.prototype.row = function (table) {

    var newCRow = addElement('tr', table);
    
    addElement('td', newCRow, this.name);

    for (var i = 0; i < this.hoursSalesArr.length; i++) {
        var currentHourlySales = this.hoursSalesArr[i];
        addElement('td', newCRow, currentHourlySales);
    }

    addElement('td', newCRow, this.cookiesSalesTotal);


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

    foot = trFoot;

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

///////////////////////////
headerRow(table);

for (let k = 0; k < cities.length; k++) {

    var towns = cities[k];
    towns.render(table);

}


footerRow(table);

function formNew(event) {
    event.preventDefault();
    
    var name = event.target.cityName.value;
    var min = parseInt(event.target.minNum.value);
    var max = parseInt(event.target.maxNum.value);
    var avg = parseFloat(event.target.avgNum.value);
    
    var newC = new Cities(name, min, max, avg);
    
    cities.push(newC);
    
    table.removeChild(foot)
    
    newC.row(table);
    
    footerRow(table);

    console.log('name',name);
}

var form = document.getElementById('newC')
form.addEventListener('submit', formNew)
