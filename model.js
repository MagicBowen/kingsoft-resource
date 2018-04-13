const fs = require('fs');

function loadProducts(path) {
    var result = JSON.parse(fs.readFileSync(`${path}/products.json`));
    result.products.forEach(product => {
        product.shape.forEach(shape => {
            shape.name = product.name;
            shape.p_type = product.type;
            shape.price = product.price;
            shape.discount = product.discount;
            shape.picture_url = `static/pictures/${shape.picture}.png`;
        })
    });
    return result.products;
}

function fetchModel(path) {
    var products = loadProducts(path);
    return async (ctx, next) => {
        ctx.getProduct = function (id, type) {
            for(i in products) {
                if (products[i].id === id) {
                    if(type > 3) return null;
                    return products[i].shape[type];
                }
            }
            return null;
        };
        await next();
    };
}

module.exports = fetchModel;