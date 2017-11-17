const SERVER_URL = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3002'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export const getShortenURLList = (payload) =>
    fetch(`${SERVER_URL}/shortenURL`, {
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

export const getShortenURLInfo = (link) =>
    fetch(`${SERVER_URL}/shortenURL/${link}`, {
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

export const getAccessInfo = (link, infoOf) =>
    fetch(`${SERVER_URL}/shortenURL/${link}/${infoOf}}`, {
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
    fetch(`${SERVER_URL}/shortenURL`,{
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

export const GetLinkAnalytics = (link) =>
    fetch(`${SERVER_URL}/shortenURL/analytics/${link}`,{
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