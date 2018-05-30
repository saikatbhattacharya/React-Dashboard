const bodyParser = require('body-parser');
const path = require('path');

const router = (app) => {
    app.get('/*', (req, res) => {
        res.json('Hi there!');
    })
}

module.exports = router;