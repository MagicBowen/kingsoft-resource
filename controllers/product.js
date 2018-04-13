var getProductPage = async (ctx, next) => {
    var id = ctx.query.id;
    var type = ctx.query.type;
    ctx.render('product.html', ctx.getProduct(id, type));
};

var getProduct =  async (ctx, next) => {
    var id = ctx.query.id;
    var type = ctx.query.type;
    var product = ctx.getProduct(id, type);
    ctx.response.type = "application/json";
    ctx.response.body = product;
};

module.exports = {
    'GET /product': getProductPage,
    'GET /api/product': getProduct
};