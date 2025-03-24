const errorHandler = (err, req, res, next) => {
    console.error("🔥 ERROR:", err);//or Logging Mechanic
    res.status(400).json({ Err: err.message })
}

module.exports = errorHandler;