function apiMiddleware(req, res, next) {
    const api_key = '987654'
    const QUERY_API = req.query.api_key
    console.log(QUERY_API);

    if (QUERY_API && QUERY_API === api_key) {
        next()
    } else {
        res.json({ message: 'Invalid API' })
    }
}
module.exports = apiMiddleware