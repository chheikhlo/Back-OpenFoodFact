const express = require('express')
const bodyParser = require('body-parser')
const port = 9000
const app = express()
const connect = require('./database/conn')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

const routesProduct = require('./routes/ProductRoutes')
const routesUser = require('./routes/UserRoutes')
const replaceFoodRoutes = require('./routes/ReplaceFoodRoutes');


connect()

app.use('/products', routesProduct)
app.use('/user', routesUser)
app.use('/replacefood', replaceFoodRoutes);

app.listen(port, () => {
    console.log(`Serveur à l'écoute sur le port ${port}`)
});
