let express = require("express")
let app = express()
let cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(require("./routes/trainRoutes"))
app.listen(5000, () => {
    console.log("Listening on port 5000")
})