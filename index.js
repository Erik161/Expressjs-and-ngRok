const express = require('express');
const device = require( 'express-device');
const app = express();

//EXPRESS-DEVICE IS A MIDDLEWARE
app.use(device.capture());

app.get('/', (req, res)=>{
    console.log(req.device);
    res.send('Hello  ' + req.device.type);
});


app.listen(3000,() => console.log('Server on port 3000') );
