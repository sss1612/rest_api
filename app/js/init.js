
console.log('Request loaded')
const shit = () => {
    console.log('LOL')
}
const examplePost = () => {
    const baseUrl = 'http://localhost:3000'
    const url = `${baseUrl}/example`;
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
    const baseUrl = 'http://localhost:3000';
    const url = `${baseUrl}/url`;
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

const addSpam = (element) => {
    element.addEventListener('click', () => {alert('rofl')})
}