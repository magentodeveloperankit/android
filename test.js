var fetchUrl = require("fetch").fetchUrl;

var promise = new Promise(function(resolve, reject) {

    fetchUrl("http://dummy.restapiexample.com/api/v1/employees", function(error, meta, body) {
        if (error)
            reject(error);
        else
            resolve(body.toString());
    });
});

promise
    .then(function(successMessage) {
        //success handler function is invoked 
        console.log(successMessage);
    })
    .catch(e => {
        console.log(e);
    })
