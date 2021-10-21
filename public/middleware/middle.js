const timer = (req, res, app) => {
    let date = new Date()
    let day = date.getDay();
    let hours = date.getHours();
    if (day === 6 || hours < 8 || hours > 19) {
        res.send("Oops were open monday to friday only ! ( working time : 9 => 17)")}
         else {
        app();
    }
}

module.exports = timer