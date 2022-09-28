/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        brand:
 *          type: string
 *          description: the product brand
 *        price:
 *          type: number
 *          format: float
 *          description: the product price
 *        description:
 *          type: string
 *          description: the product description
 *        image:
 *          type: string
 *          description: the product image
 *      required:
 *        - brand
 *        - price
 *        - description
 *      example:
 *        brand: lecoqsportif
 *        price: 18000
 *        description: Lecoqsportif product description
 *        image: https://i.pinimg.com/550x/8f/08/aa/8f08aa557bcaf1bce7beb1ed5f06cd1b.jpg
 */

//Create new product

/**
 * @swagger
 * /api/products:
 *  post:
 *    security:
 *        - bearerAuth: []
 *    summary: create new product
 *    tags: [Product]
 *    requestBody:
 *      required: true
 *      content: 
 *        application/json:
 *          schema:
 *            type: objet
 *            $ref: '#/components/schemas/Product'
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

//Get all products

/**
 * @swagger
 * /api/products:
 *  get:
 *     summary: Return all products
 *     tags: [Product]
 *     parameters:
 *       - in: query
 *         name: col
 *         schema:
 *          type: string
 *         description: sort by brand, price, createdAt (newest, oldest)
 *       - in: query
 *         name: dir
 *         schema:
 *          type: string
 *         description: sort in ascending or descending order (ASC,DESC)
 *     responses:
 *       200:
 *          description: Return all products
 *          content:
 *             application/json:
 *              schemma:
 *                 type: array
 *                 $ref: '#/components/schemas/Product'
 *       400:
 *          description: Bad request 
 *       500:
 *          description: Internal server error
 */    

//Get product by id

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *     summary: Return a product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the product id
 *     responses:
 *       200:
 *          description: product
 *          content:
 *             application/json:
 *              schemma:
 *                 type: object
 *                 $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Update Product

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *     security:
 *        - bearerAuth: []
 *     summary: Update product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the product id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             type: object
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad request 
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal server error
 */

//Delete Product

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *     security:
 *        - bearerAuth: []
 *     summary: Delete product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the product id
 *     responses:
 *       200:
 *         description: Ok
 *       400:
 *         description: Bad request 
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *          description: Not found
 *       500:
 *          description: Internal server error
 *     
 */

//Add image

/**
 * @swagger
 * /api/products/{id}/{imageId}:
 *  post:
 *    security:
 *        - bearerAuth: []
 *    summary: Add image
 *    tags: [Product]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the product id
 *       - in: path
 *         name: imageId
 *         schema:
 *          type: string
 *         required: true
 *         description: the image id
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

//Remove image

/**
 * @swagger
 * /api/products/{id}/{imageId}:
 *  delete:
 *    security:
 *        - bearerAuth: []
 *    summary: Remove image
 *    tags: [Product]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the product id
 *       - in: path
 *         name: imageId
 *         schema:
 *          type: string
 *         required: true
 *         description: the image id
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


//Get products by brand

/**
 * @swagger
 * /api/products/search/brand:
 *  get:
 *     summary: Return products by brand
 *     tags: [Product]
 *     parameters:
 *       - in: query
 *         name: brand
 *         schema:
 *          type: string
 *         required: true
 *         description: the product brand
 *     responses:
 *       200:
 *          description: Return products by brand
 *          content:
 *             application/json:
 *              schemma:
 *                 type: array
 *                 $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

//Get products by price

/**
 * @swagger
 * /api/products/search/price:
 *  get:
 *     summary: Return products by price
 *     tags: [Product]
 *     parameters:
 *       - in: query
 *         name: min
 *         schema:
 *          type: number
 *          format: float
 *         required: true
 *         description: min price
 *       - in: query
 *         name: max
 *         schema:
 *          type: number
 *          format: float
 *         required: true
 *         description: max price
 *     responses:
 *       200:
 *          description: Return products by price
 *          content:
 *             application/json:
 *              schemma:
 *                 type: array
 *                 $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request 
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

