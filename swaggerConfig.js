const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API OpenFoodFact',
            version: '1.0.0',
            description: "Documentation de l'API de OpenFoodFact",
        },
        servers: [
            {
                url: 'http://localhost:9006',
                description: 'Serveur local',
            },
        ],
    },
    apis: ['./routes/*.js'],
};


module.exports = swaggerJsdoc(options);
