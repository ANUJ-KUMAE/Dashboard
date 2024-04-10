const express = require('express')
const cors = require('cors')

require('./Connections/CreateConnection')
const user = require('./Connections/Config')

const Product = require('./Connections/ProductData')

const app = express();
app.use(cors())

app.use(express.json());

app.post('/register', async(req, resp) => {
    let data = await user(req.body);
    let result = await data.save();
    result = result.toObject();
    delete result.password;
    console.log("done")
    resp.send(result);
})

app.post('/login', async(req, resp) => {
    if(req.body.email && req.body.password)
    {
        let result = await user.findOne(req.body).select("-password");
        if(result)
        {
            resp.send(result);
        }
        else 
        {
            resp.send("No User Found");
        }
    }
    else
    {
        resp.send("No User Found")
    }
})

app.post('/InsertData', async(req, resp) => {
    let data = await Product(req.body);
    let result = await data.save();
    resp.send(result);
    console.log("done");
})

app.get('/Get-product', async(req, resp) => {
     let result = await Product.find();
     if(result.length > 0)
     {
        resp.send(result);
     } 
     else 
     {
        resp.send("No Data Found");
     }
})

app.listen(5000)