//Add product to cart

/**
 * @swagger
 * /api/cart/{id}/{productId}:
 *  post:
 *    security:
 *        - bearerAuth: []
 *    summary: Add product to cart
 *    tags: [Cart]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the user id
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

//Remove product from cart

/**
 * @swagger
 * /api/cart/{id}/{productId}:
 *  delete:
 *    security:
 *        - bearerAuth: []
 *    summary: Remove product from cart
 *    tags: [Cart]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *          type: string
 *         required: true
 *         description: the user id
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
