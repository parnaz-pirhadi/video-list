const {response} = require("express");
const axios = require('axios')

const videos = async (req, res = response) => {
    let headers = {
        "Content-Type": "application/json",
    }

        try {
            axios({
                method: "get",
                url: "http://api.aparat.com/fa/v1/video/video/mostViewedVideos",
                headers: headers
            }).then(response => {
                res.status(200).json(response.data);
            }).catch(error => {
                    res.status(500).json({message: "error"});
            })

        } catch (error) {

        }
    }
;

module.exports = {
     videos,
};
