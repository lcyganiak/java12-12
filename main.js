fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(res => {
    const app = document.getElementById('app')
    res.forEach(item => {
        const paragraf = document.createElement('p')
        paragraf.innerText = "<button>" + item.title + "</button>"
        app.appendChild(paragraf)

    });
})