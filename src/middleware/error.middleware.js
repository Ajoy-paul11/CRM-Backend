export const processError = (err, req, res, next) => {
    err.statusCode = err.statusCode || "501"
    err.message = err.message || "Something Went Wrong Internally"

    res.status(err.statusCode).json(
        {
            status: err.statusCode,
            message: err.message
        }
    )
}