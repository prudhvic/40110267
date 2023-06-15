let axios = require("axios")
let fetchDetails = async () => {
    let response = await axios.post("http://104.211.219.98/train/auth", {
        "companyName": "MGR central",
        "clientID": "7a5f9cf3-f7ef-4476-a6e1-8ddef687c4a8",
        "clientSecret": "BGRxnyDNYuRKWsmZ",
        "ownerName": "prudhvi",
        "ownerEmail": "prudhvichinnam101@gmail.com",
        "rollNo": "40110267"
    })
    let data = await response.data;
    return data.access_token
}
module.exports = { fetchDetails }