let router = require("express").Router()
let { getAllTrains, getTrain } = require("../controller/trainController")
router.get("/trains", getAllTrains)
router.get("/trains/:trainId", getTrain)
module.exports=router