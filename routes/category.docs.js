/**
 * @swagger
 * components: 
 *  schemas:
 *    Category:
 *      type: object
 *      properties: 
 *        name:
 *          type: string
 *          description: the category name
 *        description:
 *          type: string
 *          description: the category description
 *      required:
 *        - name
 *        - description
 *      example:
 *        name: Athletics
 *        description: Athletics category description
 */ 

//Create Category

/**
 * @swagger
 * /api/categories:
 *  post:
 *    security:
 *        - bearerAuth: []
 *    summary: create new category
 *    tags: [Category]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: objet
 *            $ref: '#/components/schemas/Category'
 *    responses: 
 *      201: 
 *        description: Ok
 *      400:
 *        description: Bad request 
 *      401:
 *        description: Unauthorized
 *      403:
 *        description: Forbidden
 *      500: 
 *        description: Internal Server Error     
 */


//Get all categories

/**
 * @swagger
 * /api/categories:
 *  get:
 *     summary: Return all categories
 *     tags: [Category]
 *     responses:
 *       200:
 *          description: Return all categories
 *          content:
 *             application/json:
 *              schemma:
 *                 type: array
 *                 $ref: '#/components/schemas/Category'
 *       400:
 *         description: Bad request
 *       500:
 *          description: Internal server error
 */ 

//Get category by id

/**
 * @swagger
 * /api/categories/{id}:
 *  get:
 *     summary: Return a category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the category id
 *     responses:
 *       200:
 *          description: category
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/Category'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Update Category

/**
 * @swagger
 * /api/categories/{id}:
 *  put:
 *     security:
 *        - bearerAuth: []
 *     summary: Update a category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the category id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Category'
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

//Delete Category

/**
 * @swagger
 * /api/categories/{id}:
 *  delete:
 *     security:
 *        - bearerAuth: []
 *     summary: Delete a category
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the category id
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

//Add product

/**
 * @swagger
 * /api/categories/{id}/{productId}:
 *  post:
 *    security:
 *        - bearerAuth: []
 *    summary: Add product
 *    tags: [Category]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the category id
 *       - in: path
 *         name: productId
 *         schema:
 *          type: string
 *         required: true
 *         description: the product id
 *    responses:
 *       201:
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

//Remove product

/**
 * @swagger
 * /api/categories/{id}/{productId}:
 *  delete:
 *    security:
 *        - bearerAuth: []
 *    summary: Remove product
 *    tags: [Category]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the category id
 *       - in: path
 *         name: productId
 *         schema:
 *          type: string
 *         required: true
 *         description: the product id
 *    responses:
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
