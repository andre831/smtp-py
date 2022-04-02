const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Your WebServer');
});

app.listen(3000, () => console.log('Server running on port 3000'));