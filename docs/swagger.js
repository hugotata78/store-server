const swaggerJSDoc = require('swagger-jsdoc');
require('dotenv').config()


const swaggerDefinition = {
    
        openapi: '3.0.2',
        info: {
            title: 'Store API',
            description: 'API Documentation Store',
            version: '1.0.0',
        },
        servers: [
            {
                url: `${process.env.HOST}:${process.env.PORT || 4000}`,
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
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