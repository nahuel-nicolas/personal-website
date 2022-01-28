// from https://stackoverflow.com/questions/3489460/how-to-get-visitors-location-i-e-country-using-geolocation

// const ip_api = "https://ipinfo.io";
const ip_api = 'https://api.ipregistry.co/?key=tryout';

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