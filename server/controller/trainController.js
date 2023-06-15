let axios = require("axios")
const { fetchDetails } = require("../utils")
let fetch

let getAllTrains = async (req, res) => {
    let token = await fetchDetails()
    let response = await axios("http://104.211.219.98/train/trains", { headers: { Authorization: `Bearer ${token}` } })
    let data = await response.data
    let trainList = data
    trainList.sort((a, b) => a.price.sleeper - b.price.sleeper).sort((a, b) => (b.seatsAvailable.sleeper + b.seatsAvailable.AC) - (a.seatsAvailable.sleeper + a.seatsAvailable.AC)).sort((a, b) => b.departureTime.Hours - a.departureTime.Hours)
    res.json(trainList)
}
let getTrain = async (req, res) => {
    let token = await fetchDetails()
    let response = await axios(`http://104.211.219.98/train/trains/${req.params.trainId}`, { headers: { Authorization: `Bearer ${token}` } })
    let data = await response.data;

    res.json(data)
}
module.exports = { getAllTrains, getTrain }