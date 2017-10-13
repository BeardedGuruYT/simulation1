const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const product_controller = require('./product_controller')

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING ).then(db => app.set('db', db) );

app.post( '/api/shelf', product_controller.create);
app.get( '/api/shelf', product_controller.getAll);
app.get( '/api/shelf/:id', product_controller.getOne);
app.put( '/api/shelf/:id', product_controller.update);
app.delete('/api/shelf/:id', product_controller.delete);

const port = process.env.PORT || 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );