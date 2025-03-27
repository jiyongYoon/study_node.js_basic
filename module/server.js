const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/12')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {     
        console.error({
            status: error.status,
            code: error.code
        });
    });