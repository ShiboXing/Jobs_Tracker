const app = require('express');
const bodyParser = require('body-parser')
const router = app.Router();

router.use(bodyParser.json());
console.log('http running');


router.post('/', (req, res) => {
    res.json({
        left: req.body.left,
        top: req.body.top
    });
});

module.exports = {router};