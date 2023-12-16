const irAlFormulario = () => {
    const registro = document.querySelector('#registro');
    registro.scrollIntoView({ behavior: 'smooth' });
}

const validar = () => {
    const propietario = document.getElementById('nombreDueño').value;
    const telefono = document.getElementById('telefono').value;
    const nombreMascota = document.getElementById('nombreMascota').value;
    const diaCita = document.getElementById('diaCita').value;
    const diaCitaDate = new Date(diaCita);
    const diaHoy = new Date();
    const añoH = diaHoy.getFullYear();
    const mesH = diaHoy.getMonth() + 1;
    const diaH = diaHoy.getDate();
    const añoC = diaCitaDate.getFullYear();
    const mesC = diaCitaDate.getMonth() + 1;
    const diaC = diaCitaDate.getDate();
    const horaCita = document.getElementById('horaCita').value;
    const horaCitaArray = horaCita.split(':');
    const sintomas = document.getElementById('sintomas').value;

    if (!propietario) {
        swal("Error", 'Ingrese un propietario.', 'error', {
            button: '¡Ya lo arreglo!'
        });
    } else if (!telefono) {
        swal("Error", 'Ingrese un numero de telefono.', 'error', {
            button: '¡Ya lo arreglo!'
        });
    } else if (!nombreMascota) {
        swal("Error", 'Ingrese el nombre de la mascota.', 'error', {
            button: '¡Ya lo arreglo!'
        });
    } else if (añoH > añoC || mesH > mesC) {
        swal("Error", 'Ingrese una fecha valida.', 'error', {
            button: '¡Ya lo arreglo!'
        });
    } else if (mesH == mesC && diaH > diaC) {
        swal("Error", 'Ingrese una fecha valida.', 'error', {
            button: '¡Ya lo arreglo!'
        });
    } else if (horaCitaArray[0] < 8 || horaCitaArray[0] > 17) {
        swal("Error", 'Ingrese un horario valido.', 'error', {
            button: '¡Ya lo arreglo!'
        });
    } else if (!sintomas) {
        swal("Error", 'Ingrese algun sintoma.', 'error', {
            button: '¡Ya lo arreglo!'
        });
    } else {
        registrar();
    }

}

const registrar = () => {
    const propietario = document.getElementById('nombreDueño').value;
    const telefono = document.getElementById('telefono').value;
    const mascota = document.getElementById('nombreMascota').value;
    const tipoMascota = document.querySelector('input[name="elejirAnimal"]:checked').value;
    const diaCita = new Date(document.getElementById('diaCita').value);
    const diaCitaDate = new Date(diaCita);
    const citaDia = diaCitaDate.getDate() + '/' + (diaCitaDate.getMonth() + 1) + '/' + diaCitaDate.getFullYear() ;
    const diaHora = document.getElementById('horaCita').value;
    const sintomas = document.getElementById('sintomas').value;

    const cita = {
        nombrePropietario: propietario,
        telefonoPropietario: telefono,
        nombreMascota: mascota,
        tipoMascota: tipoMascota,
        fecha: citaDia,
        hora: diaHora,
        sintomasMascota: sintomas,
        estado: 'activa'
    };

    crearCita(cita);
};

const arrPerros = ['./perros/perro1.jpg', './perros/perro2.jpg', './perros/perro3.jpg', './perros/perro4.jpg'];
const arrGatos = ['./gatos/gato1.jpg', './gatos/gato2.jpg', './gatos/gato3.jpg', './gatos/gato4.jpg'];
const arrAves = ['./aves/ave1.jpg', './aves/ave2.jpg', './aves/ave3.jpg', './aves/ave4.jpg'];
const arrConejos = ['./conejos/conejo1.jpg', './conejos/conejo2.jpg', './conejos/conejo3.jpg', './conejos/conejo4.jpg'];
const arrHamsters = ['./hamsters/hamster1.jpg', './hamsters/hamster2.jpg', './hamsters/hamster3.jpg', './hamsters/hamster4.jpg'];
const arrPeces = ['./peces/pez1.jpg', './peces/pez2.jpg', './peces/pez3.jpg', './peces/pez4.jpg'];

const crearCita = (objCita) => {
    const articulo = document.createElement('article');
    const img = document.createElement('img');
    const divCliente = document.createElement('div');
    const divLinea = document.createElement('div');
    const divMascota = document.createElement('div');
    const divContenedor = document.createElement('div');
    const pDueño = document.createElement('p');
    const spanDueño = document.createElement('span');
    const pTelefono = document.createElement('p');
    const spanTelefono = document.createElement('span');
    const pMascota = document.createElement('p');
    const spanMascota = document.createElement('span');
    const pTipo = document.createElement('p');
    const spanTipo = document.createElement('span');
    const pFecha = document.createElement('p');
    const spanFecha = document.createElement('span');
    const pHora = document.createElement('p');
    const spanHora = document.createElement('span');
    const pSintomas = document.createElement('p');
    const spanSintomas = document.createElement('span');
    const seleccion = document.createElement('select');
    const opcionActiva = document.createElement('option');
    const opcionFinalizada = document.createElement('option');
    const opcionCancelada = document.createElement('option');

    const imgRandom = Math.floor(Math.random() * 4);

    if (objCita.tipoMascota === 'Perro') {
        img.src = arrPerros[imgRandom];
    } else if (objCita.tipoMascota === 'Gato') {
        img.src = arrGatos[imgRandom];
    } else if (objCita.tipoMascota === 'Ave') {
        img.src = arrAves[imgRandom];
    } else if (objCita.tipoMascota === 'Conejo') {
        img.src = arrConejos[imgRandom];
    } else if (objCita.tipoMascota === 'Hamnster') {
        img.src = arrHamsters[imgRandom];
    } else {
        img.src = arrPeces[imgRandom];
    }
    img.alt = 'La mascota del dueño';
    pDueño.textContent = 'Propietario: ';
    spanDueño.textContent = objCita.nombrePropietario;
    pTelefono.textContent = 'Telefono: ';
    spanTelefono.textContent = objCita.telefonoPropietario;
    pMascota.textContent = 'Mascota: ';
    spanMascota.textContent = objCita.nombreMascota;
    pTipo.textContent =  'Tipo: ';
    spanTipo.textContent = objCita.tipoMascota;
    pFecha.textContent = 'Fecha: ';
    spanFecha.textContent = objCita.fecha;
    pHora.textContent = 'Hora: ';
    spanHora.textContent = objCita.hora;
    pSintomas.textContent = 'Sintomas';
    spanSintomas.textContent = objCita.sintomasMascota;
    opcionActiva.textContent = 'Activa';
    opcionActiva.value = 'activa';
    opcionFinalizada.textContent = 'Finalizada';
    opcionFinalizada.value = 'finalizada';
    opcionCancelada.textContent = 'Cancelada';
    opcionCancelada.value = 'cancelada';

    articulo.classList.add('cita');
    divCliente.classList.add('cliente');
    divLinea.classList.add('linea');
    divMascota.classList.add('mascota');
    pSintomas.classList.add('s');
    spanSintomas.classList.add('sintomashola');
    seleccion.classList.add('citaSelect')

    pDueño.appendChild(spanDueño);
    pTelefono.appendChild(spanTelefono);
    pMascota.appendChild(spanMascota);
    pTipo.appendChild(spanTipo);
    pFecha.appendChild(spanFecha);
    pHora.appendChild(spanHora);
    pSintomas.appendChild(spanSintomas);
    divCliente.appendChild(pDueño);
    divCliente.appendChild(pTelefono);
    divMascota.appendChild(pMascota);
    divMascota.appendChild(pTipo);
    divMascota.appendChild(pFecha);
    divMascota.appendChild(pHora);
    seleccion.appendChild(opcionActiva);
    seleccion.appendChild(opcionFinalizada);
    seleccion.appendChild(opcionCancelada);
    divContenedor.appendChild(divCliente);
    divContenedor.appendChild(divLinea);
    divContenedor.appendChild(divMascota);
    divContenedor.appendChild(pSintomas);
    divContenedor.appendChild(seleccion);
    articulo.appendChild(img);
    articulo.appendChild(divContenedor);

    document.getElementById('citasAqui').appendChild(articulo);
}

function filtrarCitas() {
    let opcionesFiltro = document.getElementById('opcionesFiltro');
    let valueFiltro = opcionesFiltro.options[opcionesFiltro.selectedIndex].value;

    let citas = document.getElementsByClassName('cita');

    for (let i = 0; i < citas.length; i++) {
        let cita = citas[i];
        let citaSelect = cita.getElementsByClassName('citaSelect')[0];
        let opcionCita = citaSelect.options[citaSelect.selectedIndex].value;

        if (valueFiltro === 'todas') {
            cita.style.display = 'block';
        } else if (opcionCita === valueFiltro) {
            cita.style.display = 'block';
        } else {
            cita.style.display = 'none';
        }
    }
}


document.getElementById('opcionesFiltro').addEventListener('change', filtrarCitas);
document.getElementsByClassName('citaSelect').addEventListener('change', filtrarCitas);