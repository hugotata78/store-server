/**
 * @swagger
 * components: 
 *  schemas:
 *    Image:
 *      type: object
 *      properties: 
 *        image:
 *          type: string
 *          description: image 
 *        description:
 *          type: string
 *          description: description
 *        product_id:
 *          type: integer
 *          description: product id
 *      required:
 *        - image
 *        - description
 *      example:
 *        image: https://cdn.pixabay.com/photo/2017/04/08/16/16/kicks-2213619__340.jpg
 *        description: Image description
 *        product_id: 2
 */ 

//Create new image

/**
 * @swagger
 * /api/images:
 *  post:
 *    security:
 *        - bearerAuth: []
 *    summary: create new image
 *    tags: [Image]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: objet
 *            $ref: '#/components/schemas/Image'
 *    responses: 
 *      201: 
 *        description: Ok
 *      500: 
 *        description: Internal Server Error     
 */


//Get all images

/**
 * @swagger
 * /api/images:
 *  get:
 *     security:
 *        - bearerAuth: []
 *     summary: Return all images
 *     tags: [Image]
 *     responses:
 *       200:
 *          description: Return all images
 *          content:
 *             application/json:
 *              schemma:
 *                 type: array
 *                 $ref: '#/components/schemas/Image'
 *       500:
 *          description: Internal server error
 */ 

//Get image by id

/**
 * @swagger
 * /api/images/{id}:
 *  get:
 *     security:
 *        - bearerAuth: []
 *     summary: Return a image
 *     tags: [Image]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the image id
 *     responses:
 *       200:
 *          description: image
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/Image'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Update image

/**
 * @swagger
 * /api/images/{id}:
 *  put:
 *     security:
 *        - bearerAuth: []
 *     summary: Update a image
 *     tags: [Image]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the image id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Image'
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *          description: Bad request 
 *       401:
 *          description: Unauthorized
 *       403:
 *          description: Forbidden
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal server error
 */

//Delete Image

/**
 * @swagger
 * /api/images/{id}:
 *  delete:
 *     security:
 *        - bearerAuth: []
 *     summary: Delete a image
 *     tags: [Image]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the image id
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad request 
 *       401:
 *         description: Unauthorized
 *       403:
 *          description: Forbidden
 *       404:
 *         description: Not found 
 *       500:
 *         description: Internal server error
 *     
 */