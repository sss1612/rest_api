
console.log('Request loaded')
const shit = () => {
    console.log('LOL')
}
const example = () => {
    const url = 'http://localhost:3000/example';
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

const addSpam = (element) => {
    element.addEventListener('click', () => {alert('rofl')})
}