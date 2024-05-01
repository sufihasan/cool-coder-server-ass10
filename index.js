const express = require('express');
const cors = require('cors')
const app = express();

const courses = require('./courses.json')

const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Alhamdulilla my cool coder server is work')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('id data here', id)
    const course = courses.find(course => course.id === id);
    res.send(course);

})

app.listen(port, () => {
    console.log(`cool coder server is running on port ${port}`);
})