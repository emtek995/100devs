const express = require('express');
const app = express();
const PORT = 8000;

const derps = [
    'derp'= {
        'name': 'derp',
        'age': 69,
        'location': 'somewhere'
    },
    'herp' = {
        'name': 'herp',
        'age': 42,
        'location': 'nowhere'
    }
];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
    res.json(derps);
});

app.listen(PORT, () => {
    console.log('Derp');
});
