const {request, response} = require('express');
const axios = require('axios');
const {getToken} = require('../api/token');

/*getAlbums method returns 10 Artitss that matches with the Artist name given (limit 10)*/
const getArtists = async(req=request, res=response) =>{
    const artist = req.params.artist
    const token = await getToken();
    const config = {
        headers: { Authorization: `Bearer ${token.data.access_token}` }
    };
    axios.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist&limit=10`,
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

/*getAlbumDetails method returns details of the Artist id given  */
const getArtistDetails = async(req=request, res=response) =>{
    const id = req.params.id
    const token = await getToken();
    const config = {
        headers: { Authorization: `Bearer ${token.data.access_token}` }
    };
    axios.get(`https://api.spotify.com/v1/artists/${id}`,
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
}

module.exports={getArtists, getArtistDetails};