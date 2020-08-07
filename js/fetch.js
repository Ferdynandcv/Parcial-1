
function traer() {
    var contenido = document.getElementById('contenido')
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results['0'])
            contenido.innerHTML = `
        <div>
        <img src="   ${data.results['0'].picture.large}"> 
        <br></br>
        <p>Nombre:   ${data.results['0'].name.first} </p>
        <br></br>
        <p>Apellido: ${data.results['0'].name.last}</P
        <br></br>
        <p>Telefono: ${data.results['0'].phone}</P>
        <br></br>
        <p>Correo:   ${data.results['0'].email}</P>
        <p>Telefono: ${data.results['0'].phone}</P>
        <br></br>
        <p>años:   ${data.results['0'].registered.age}</P>
        </div>`
        })
}


