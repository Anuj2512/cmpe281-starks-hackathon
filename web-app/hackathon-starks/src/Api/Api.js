const CP_SERVER_URL = 'http://localhost:3002'
const TREND_SERVER_URL = 'http://localhost:3002'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const getShortenURLList = (payload) =>
    fetch(`${CP_SERVER_URL}/shortenURL`, {
        method: 'GET',
        headers: headers
    })
    .then(res => {
        return res.json();
    })
    .catch(error => {
            console.log("This is error");
            return error;
    });

export const postShortenURL = (payload) =>
    fetch(`${CP_SERVER_URL}/shortenURL`,{
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(res => {
        return res.json();
    })
    .catch(error => {
            console.log("This is error");
            return error;
});

export const getAccessInfo = (link, infoOf) =>
    fetch(`${TREND_SERVER_URL}/trenddata/${link}/${infoOf}`, {
        method: 'GET',
        headers: headers
    })
    .then(res => {
        return res.json();
    })
    .catch(error => {
            console.log("This is error");
            return error;
});

export const GetLinkAnalytics = (link) =>
    fetch(`${TREND_SERVER_URL}/trenddata/analytics/${link}`,{
        method: 'GET',
        headers: headers,
    })
    .then(res => {
        return res.json();
    })
    .catch(error => {
            console.log("This is error");
            return error;
    });