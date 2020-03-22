const app = require('express');
const router = app.Router;

//http receive points
router.get('/', (req, res) => {
    console.log(req)
});