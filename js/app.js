document.getElementById('formu').addEventListener('submit', infom);

function infom() {

    let name = document.getElementById('names').value;
    let lastname = document.getElementById('latsname').value;
    let tele = document.getElementById('tele').value;
    let email = document.getElementById('mail').value;
    let descrip = document.getElementById('descrip').value;
    let year = document.getElementById('year').value;
    let multi = document.getElementById('multi').value;

    const envio = {
        name,
        lastname,
        tele,
        email,
        descrip,
        year,
        multi
    };

    if (localStorage.getItem('envios') === null) {
        let envios = [];
        envios.push(envio);
        localStorage.setItem('envios', JSON.stringify(envios));
    } else {
        let envios = JSON.parse(localStorage.getItem('envios'));
        envios.push(envio);
        localStorage.setItem('envios', JSON.stringify(envios));
    }

    getenvio();
    event.preventDefault();

}

function getenvio() {
    let envios = JSON.parse(localStorage.getItem('envios'));
    let enviosView = document.getElementById('envios');

    enviosView.innerHTML = '';

    for (let i = 0; i < envios.length; i++) {

        let name = envios[i].name;
        let lastname = envios[i].lastname;
        let tele = envios[i].tele;
        let email = envios[i].email;
        let descrip = envios[i].descrip;
        let year = envios[i].year;
        let multi = envios[i].multi;

        enviosView.innerHTML += `
        <div>
        <br><br/>
            <p> Nombre: ${name}  ${lastname}  </p>
            <p> Telefono:   ${tele} </p>
            <p> Correo:   ${email}</p>
            <p> Raza:  ${descrip} / ${year} / ${multi}<p/>
            <br></br>
        </div>`;
    }

}


getenvio();
