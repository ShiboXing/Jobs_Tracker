const app = require('express');
const router = app.Router();

console.log('http running');
//http receive points
router.get('/', (req, res) => {
    console.log(req);
});

module.exports = {router};