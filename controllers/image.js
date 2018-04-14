const fs = require('mz/fs');
const static_picture_path = 'static/pictures';

async function fillImageToCtx(ctx, image) {
    if (await fs.exists(image)) {
        ctx.response.type = "image/jpg";
        ctx.response.body = await fs.readFile(image);
    } else {
        ctx.response.status = 404;
    }    
}

var getImage = async (ctx, next) => {
    var name = ctx.query.name;
    var image = `${static_picture_path}/product/${name}`;
    await fillImageToCtx(ctx, image);
};

var getCover = async (ctx, next) => {
    var name = ctx.query.name;
    var image = `${static_picture_path}/wechat-cover/${name}_s.png`;
    await fillImageToCtx(ctx, image);
};

module.exports = {
    'GET /image': getImage,
    'GET /cover': getCover
};