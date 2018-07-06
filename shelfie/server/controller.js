const axios = require('axios');

let list = []

function getList(req, res, next) {
    axios.get(`api/inventory`)
        .then(response => {
            console.log(response)
            list = response.data
            res.status(200).json(list);
        });

}

module.exports = {
    getList
}