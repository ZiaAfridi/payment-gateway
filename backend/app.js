const bodyParser = require('body-parser');
const express = require('express');
const config = require('./config');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
// Add middleware for parsing URL encoded bodies (which are usually sent by browser)
app.use(cors());
// Credit card routes
app.use('/card', require('./src/routes/creditCard.routes'));

// Apply swagger UI.
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs.default));

// Test route
app.get('/', (req, res) => {
	const help = `
  <pre>
      Welcome to the API!
      Use an x-access-token header to work with your own data:
      fetch(url, { headers: { 'x-access-token': 'whatever-you-want' }})
      The following endpoints are available:
    </pre>`;
	res.send(help);
});

app.listen(config.port).on('listening', () => {
	// console.log(`API is live on ${config.port}`);
	console.info(`API is live on ${config.port}`);
});

module.exports = app;