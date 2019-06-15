console.log('Request loaded')
const baseUrl = 'http://localhost';
const shit = () => {
    console.log('LOL')
}
const examplePost = () => {
    const url = `${baseUrl}:12000/example`;
    const data = {no: 'you'};
    const params = {
        headers: {'Content-Type': 'application/json'},
        Body: data,
        method: 'POST'
    };
    fetch(url, params).then((response) => {
        response.json().then((data) => {
            console.log(data);
        });
    });
}
const exampleGet = () => {
    const url = `${baseUrl}:12000/url`;
    // get request has no body, only post sends information
    const params = {
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    fetch(url, params).then((response) => {
        response.json().then((data) => {
            console.log(data);
        });
    });
}
const delayedRequest = () => {
    const url = `${baseUrl}:12000/delay`;
    // get request has no body, only post sends information

    async function asyncData() {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const result = asyncData();
    result.then(data => console.log(data));
}

const addSpam = (element) => {
    element.addEventListener('click', () => {alert('rofl')})
}