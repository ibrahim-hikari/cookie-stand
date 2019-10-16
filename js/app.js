var container = document.getElementById('code');

var Seattle = {
    city: 'Seattle',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    averagePerCustomer: 6.3,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },
    
    cookiesPurchased: function () {
        var hours = [ ["6am: ",], ["7am: ",], ["8am: ",], ["8am: ",], ["9am: ",], ["10am: ",], ["11am: ",], ["12pm: ",],  [" 1pm: ",], [" 2pm: ",], ["3pm: ",], ["4pm: ",], [" 5pm: ",], ["6pm: ",], [" 7pm: ",], ["Total: ",] ];
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(this.minCustomersPerHour, this.maxCustomersPerHour) * Seattle.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }
        
        return hours;
    },
    render: function(){
        var h2 = document.createElement('h2');
        container.appendChild(h2)
        h2.textContent = this.city;
    
        var ul = document.createElement('ul');
        container.appendChild(ul);
    
        var hours = this.cookiesPurchased();
        
        for (let i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
    
            var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
            li.textContent = salesList;
        }
        
    }
}


var Tokyo = {
    city: 'Tokyo',
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    averagePerCustomer: 1.2,
    arrTokyo: [],
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hours = [ ["6am: ",], ["7am: ",], ["8am: ",], ["8am: ",], ["9am: ",], ["10am: ",], ["11am: ",], ["12pm: ",],  [" 1pm: ",], [" 2pm: ",], ["3pm: ",], ["4pm: ",], [" 5pm: ",], ["6pm: ",], [" 7pm: ",], ["Total: ",] ];
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Tokyo.minCustomersPerHour, Tokyo.maxCustomersPerHour) * Tokyo.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }

        return hours;
    },
    render: function(){
        var h2 = document.createElement('h2');
        container.appendChild(h2)
        h2.textContent = this.city;
    
        var ul = document.createElement('ul');
        container.appendChild(ul);
    
        var hours = this.cookiesPurchased();
        
        for (let i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
    
            var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
            li.textContent = salesList;
        }
        
    }
}

var Dubai = {
    city: 'Dubai',
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    averagePerCustomer: 3.7,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hours = [ ["6am: ",], ["7am: ",], ["8am: ",], ["8am: ",], ["9am: ",], ["10am: ",], ["11am: ",], ["12pm: ",],  [" 1pm: ",], [" 2pm: ",], ["3pm: ",], ["4pm: ",], [" 5pm: ",], ["6pm: ",], [" 7pm: ",], ["Total: ",] ];
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Dubai.minCustomersPerHour, Dubai.maxCustomersPerHour) * Dubai.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }

        return hours;
    },
    render: function(){
        var h2 = document.createElement('h2');
        container.appendChild(h2)
        h2.textContent = this.city;
    
        var ul = document.createElement('ul');
        container.appendChild(ul);
    
        var hours = this.cookiesPurchased();
        
        for (let i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
    
            var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
            li.textContent = salesList;
        }
        
    }
}

var Paris = {
    city: 'Paris',
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    averagePerCustomer: 2.3,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hours = [ ["6am: ",], ["7am: ",], ["8am: ",], ["8am: ",], ["9am: ",], ["10am: ",], ["11am: ",], ["12pm: ",],  [" 1pm: ",], [" 2pm: ",], ["3pm: ",], ["4pm: ",], [" 5pm: ",], ["6pm: ",], [" 7pm: ",], ["Total: ",] ];
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Paris.minCustomersPerHour, Paris.maxCustomersPerHour) * Paris.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }

        return hours;
    },
    render: function(){
        var h2 = document.createElement('h2');
        container.appendChild(h2)
        h2.textContent = this.city;
    
        var ul = document.createElement('ul');
        container.appendChild(ul);
    
        var hours = this.cookiesPurchased();
        
        for (let i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
    
            var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
            li.textContent = salesList;
        }
        
    }
}

var Lima = {
    city: 'Lima',
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    averagePerCustomer: 4.6,
    forEachHour: function (minCustomersPerHour, maxCustomersPerHour) {
        var range = maxCustomersPerHour - minCustomersPerHour;
        var rand = (Math.random() * range) + minCustomersPerHour;
        var final = Math.ceil(rand);
        return (final);
    },

    cookiesPurchased: function () {
        var hours = [ ["6am: ",], ["7am: ",], ["8am: ",], ["8am: ",], ["9am: ",], ["10am: ",], ["11am: ",], ["12pm: ",],  [" 1pm: ",], [" 2pm: ",], ["3pm: ",], ["4pm: ",], [" 5pm: ",], ["6pm: ",], [" 7pm: ",], ["Total: ",] ];
        var hoursSum = 0;
        for (i = 0; i < 15; i++) {
            var cookiesPerHour = this.forEachHour(Lima.minCustomersPerHour, Lima.maxCustomersPerHour) * Lima.averagePerCustomer;
            hours[i][1] = Math.ceil(cookiesPerHour);
            hoursSum = hoursSum + hours[i][1];
            hours[15][1] = hoursSum;
        }

        return hours;
    },
    render: function(){
        var h2 = document.createElement('h2');
        container.appendChild(h2)
        h2.textContent = this.city;
    
        var ul = document.createElement('ul');
        container.appendChild(ul);
    
        var hours = this.cookiesPurchased();
        
        for (let i = 0; i < hours.length; i++) {
            var li = document.createElement('li');
            ul.appendChild(li);
    
            var salesList =  hours[i][0] + hours[i][1] +  ' cookies';
            li.textContent = salesList;
        }
        
    }
}

// function render (){
//     var container = document.getElementById('code');

//     var h2 = document.createElement('h2');
//     container.appendChild(h2)
//     h2.textContent = this.city;

//     var ul = document.createElement('ul');
//     container.appendChild(ul);

//     for (let i = 0; i < hours.length; i++) {
//         var li = document.createElement('li');
//         ul.appendChild(li);

//         var salesList = hours[i] + ': ' + this.cookiesPurchased()[i] + ' cookies';
//         li.textContent = salesList;
        
//     }

// }

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();