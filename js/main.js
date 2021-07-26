const btnSwitch = document.querySelector('#switch')
const btnMenu = document.querySelector('.btn-hamburger')
const navBar = document.querySelector('.nav-bar')
const links = document.querySelectorAll('.links')

if( localStorage.getItem('dark-mode') === 'true' ) {
	document.body.classList.add('dark')
	btnSwitch.classList.add('active')
} else {
	document.body.classList.remove('dark')
	btnSwitch.classList.remove('active')
}

loadEventListeners()

function loadEventListeners(){

	window.addEventListener('resize', resizeNavBar)

	btnSwitch.addEventListener('click', theme)
	btnMenu.addEventListener('click', navBarToggle)

	for(let i=0; i < links.length; i++){
		links[i].addEventListener('click', navBarToggle)
	}

}

function navBarToggle(){
	navBar.classList.toggle('open')
	btnMenu.classList.toggle('open')
}

function theme() {
	document.body.classList.toggle('dark') // Si no tiene la clase se la asigna, si la tiene se la quita (al body, en este caso)
	btnSwitch.classList.toggle('active')

	// Save mode in localstorage
	if ( document.body.classList.contains('dark' )){
		localStorage.setItem('dark-mode', 'true')
	} else {
		localStorage.setItem('dark-mode', 'false')
	}
}

function resizeNavBar(){
	if (window.innerWidth > 900){
		if( navBar.classList.contains('open') ) {
			navBar.classList.remove('open')
			btnMenu.classList.remove('open')
		}
	}
}

var typed = new Typed(".typed", {

    strings: ["Computer Systems Engineer",
            "Software Developer",
            "Programmer"],
	typeSpeed: 120, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato

})