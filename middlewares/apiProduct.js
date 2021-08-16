function apiMiddleware(req, res, next) {
    const api_key = 987654
    req.query(api_key)
    next()
}