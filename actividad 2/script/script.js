const barraLateral = document.getElementById('sidebar');
const botonBarra = document.getElementById('boton');

botonBarra.addEventListener('click', () => {

    barraLateral.classList.toggle('is-open'); 

    const isExpanded = botonBarra.getAttribute('aria-expanded') === 'true' || false;
    botonBarra.setAttribute('aria-expanded', !isExpanded);

});


