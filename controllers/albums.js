const {request, response} = require('express');
const axios = require('axios');
const {getToken} = require('../api/token');

const getAlbums = async(req=request, res=response) =>{
    const album = req.params.album
    const token = await getToken();
    const config = {
        headers: { Authorization: `Bearer ${token.data.access_token}` }
    };
    axios.get(`https://api.spotify.com/v1/search?q=${album}&type=album&limit=5`,
        config
    )
    .then(result => {
        return res.json(result.data.albums)
    })
    .catch(error => {
        if(error.response.status === 404)
            return res.status(404).json(error);
        return res.status(500).json('Server Error - Please contact the server admin');
    });
};

module.exports={getAlbums};