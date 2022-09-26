/**
 * @swagger
 * components: 
 *  schemas: 
 *    Login:
 *      type: object
 *      properties:
 *       email:
 *          type: string 
 *       password: 
 *          type: string
 *      required:
 *        - email
 *        - password
 *      example:
 *        email: admin@test.com
 *        password: 1234test
 *        
 */

//register User

/**
 * @swagger
 * /api/auth/register:
 *  post:
 *    summary: create new user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: objet
 *            $ref: '#/components/schemas/User'
 *    responses: 
 *      201: 
 *        description: Ok
 *      500: 
 *        description: Internal Server Error     
 */

// Login user

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: login user
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Login'
 *    responses: 
 *      200: 
 *        description: Succesful response
 *      401:
 *        description: Unauthorized
 *      500: 
 *        description: Internal Server Error     
 */

//find me

/**
 * @swagger
 * /api/auth/{id}:
 *  get:
 *     security:
 *        - bearerAuth: []
 *     summary: Return my user
 *     tags: [Auth]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: Find me
 *     responses:
 *       200:
 *          description: user
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found / user not found
 *       500:
 *         description: Internal server error
 */