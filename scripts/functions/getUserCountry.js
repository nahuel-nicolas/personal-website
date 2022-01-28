// from https://stackoverflow.com/questions/3489460/how-to-get-visitors-location-i-e-country-using-geolocation

// const ip_api = "https://ipinfo.io";
const ip_api = 'https://api.ipregistry.co/2802:8010:810e:6900:2d7d:9228:10b1:1f7b?key=qd3shi7mn54j38n1';

export async function getUserCountry () {
    const userCountry = await fetch(ip_api)
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
        return payload.location.country.name;
    })
    .catch(function () {
        return "Any";
    });
    return userCountry
}
