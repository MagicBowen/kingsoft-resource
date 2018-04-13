var getProductPage = async (ctx, next) => {
    var id = ctx.query.id;
    ctx.render('product.html', ctx.getProduct(id));
};

var getProduct =  async (ctx, next) => {
    var id = ctx.query.id;
    var product = ctx.getProduct(id);
    ctx.response.type = "application/json";
    ctx.response.body = product;
};

module.exports = {
    'GET /product': getProductPage,
    'GET /api/product': getProduct
};