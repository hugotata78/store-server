const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config()


const swaggerDefinition = {

    openapi: '3.0.2',
    info: {
        title: 'Store API',
        description: 'API Documentation Store',
        version: '1.0.0',
    },
    host: `${process.env.HOST}:${process.env.PORT || 4000}`,
    basePath: '/api/',
    schemes: [process.env.SCHEMES],
    consumes: ["application/json"],
    produces: ["application/json"],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: process.env.SCHEMES,
                scheme: "bearer",
            },
        },
    },

};

const swaggerOptions = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

module.exports = swaggerJSDoc(swaggerOptions);