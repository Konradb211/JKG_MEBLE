const navMobile = document.querySelector(".navbar-mobile")
const navBtn = document.querySelector(".hamburger")
const footerYear = document.querySelector(".footeryear")
const allLinks = document.querySelectorAll(".navbar-mobile__link")
const beds = document.querySelectorAll(".beds")
const kitchenCorners = document.querySelectorAll(".kitchenCorners")
const corners = document.querySelectorAll(".corners")
const pouffe = document.querySelector(".pouffe")
const list = document.querySelector(".list")

const checkTextarea = () => {
	if (textarea.value === "") {
		errorArea.style.visibility = "visible"
	} else {
		errorArea.style.visibility = "hidden"
	}
}

const handleNav = () => {
	navBtn.classList.toggle("is-active")
	navMobile.classList.toggle("navbar-mobile--active")

	if (navMobile.classList.contains("navbar-mobile--active")) {
		document.getElementsByTagName("body")[0].style.overflow = "hidden"
	} else {
		document.getElementsByTagName("body")[0].style.overflow = "visible"
	}

	allLinks.forEach(links =>
		links.addEventListener("click", () => {
			navBtn.classList.remove("is-active")
			navMobile.classList.remove("navbar-mobile--active")
			document.getElementsByTagName("body")[0].style.overflow = "visible"
		})
	)
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

navBtn.addEventListener("click", handleNav)
handleCurrentYear()
