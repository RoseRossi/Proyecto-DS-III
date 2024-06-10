//libs
const 
    express = require('express'),
    cors = require('cors'),
    routes = require('../routes/routes');

const 
    app = express(),
    { PORT } = process.env;

// Ports
app.set('port', PORT || 80);


app.use(express.json());
app.use(cors());
app.use(routes)


//Listener 
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});