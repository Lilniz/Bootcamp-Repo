const Express = require('express');
const app = Express();
const PORT = process.env.PORT || 4321;
const path = require('path');

const data = [
    {
        name: 'Lee',
        age: 30,
    },
    {
        name: 'Kayla',
        age: 27,
    }
]

// const found = data.find((obj) => obj.name === 'Lee');
// const found = data.find((obj) => obj.age > 20);
// console.log(found);

// const dir = __dirname;
// console.log(__dirname)

app.use(Express.static(path.join(__dirname, 'public')))

app.get('/', (client_request, response) => {
    // response.send('index')
    response.sendFile(path.join(__dirname, 'index.html'))
    // console.log(client_request);
});

app.get('/api', (client_request, response) => {
    console.log(client_request.query);
    const found = data.find((obj) => obj.name.toLowerCase() === client_request.query.name);
    response.json(found || 'Data not found.');
});

// app.listen(3333, () => {
//     console.log('Listening on port 3333')
// });

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})