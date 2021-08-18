function apiMiddleware(req, res, next) {
    const api_key = '987654'
    console.log(req.query);
    next()
}
module.exports = apiMiddleware