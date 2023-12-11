// HAMBURGER MENU

const menuButton = document.getElementById("menu-tlacitko");
const menuItems = document.getElementById("menu-polozky");

menuButton.addEventListener("click", (udalost) => {

	// změna třídy po kliknutí
	menuItems.classList.toggle("show");


	// změna ikonky tlačítka na křížek, pokud je menu rozbalené a na hamburger, pokud je sbalené.
	const ikonka = menuButton.querySelector("i");

	if (menuItems.classList.contains("show")) {
		ikonka.classList.add("fa-xmark");
		ikonka.classList.remove("fa-bars")
	}
	else {
		ikonka.classList.add("fa-bars");
		ikonka.classList.remove("fa-xmark")
	}
});

