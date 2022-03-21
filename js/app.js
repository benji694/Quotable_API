fetch('http://api.quotable.io/random').then((response) => {
    return response.json()
}).then((data) => {
    const app = document.querySelector('#app');
    const cadre = document.createElement('div');
    cadre.textContent = data.content
    app.appendChild(cadre)
})






