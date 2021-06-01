const axios = require('axios');

const getToken = async( category ) => {
    const base64Credentials = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64');
    const res = await axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + base64Credentials     
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })

    return res;
};


module.exports = {getToken}