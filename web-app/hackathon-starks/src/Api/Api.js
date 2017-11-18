const CP_SERVER_URL = 'http://ec2-52-53-175-64.us-west-1.compute.amazonaws.com:3000'
const TREND_SERVER_URL = 'http://54.219.150.85'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const getShortenURLList = (payload) =>
    fetch(`${CP_SERVER_URL}/urls`, {
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
    fetch(`${CP_SERVER_URL}/url`,{
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
        method: 'GET'
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