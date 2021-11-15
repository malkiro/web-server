const request = require("postman-request");

const geocode = (address, callback) => {
    const geoURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoibWFsa2lybyIsImEiOiJja3I3aGo5MHgwaW9yMnBxcmJub29iamdmIn0.Wcz2K_4aLRq3KHaGkgy9cw";

    request({url: geoURL, json: true}, (error, response) => {

        if(error){
            callback("There is an error connecting to the geolocation service!", undefined);
        }else if(response.body.features.length === 0){
            callback("Location not found, please try another search!", undefined);
        }else{
            const data = {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            }

            callback(undefined, data);
        }
    });
}

module.exports = geocode;