var fetchUrl = require("fetch").fetchUrl;

var promise = new Promise(function(resolve, reject) {

    fetchUrl("http://dummy.restapiexample.com/api/v1/employees", function(error, meta, body) {
        if (error)
            reject(error);
        resolve(body.toString());
    });

});

promise
    .then(function(successMessage) {
        let response = JSON.parse(successMessage);
       
        console.log(response.employee_name);
        console.log("good to go !!!");
    });
