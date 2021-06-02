const {request, response} = require('express');
const axios = require('axios');
const {getToken} = require('../api/token');

/*getAlbums method returns 10 Tracks that matches with the Track name given (limit 10)*/
const getTracks = async(req=request, res=response) =>{
    const track = req.params.track
    const token = await getToken();
    const config = {
        headers: { Authorization: `Bearer ${token.data.access_token}` }
    };
    axios.get(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=10`,
        config
    )
    .then(result => {
        return res.json(result.data)
    })
    .catch(error => {
        if(error.response.status === 404)
            return res.status(404).json(error);
        return res.status(500).json('Server Error - Please contact the server admin');
    });
};

module.exports={getTracks};