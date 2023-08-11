const navMobile = document.querySelector(".navbar-mobile")
const navBtn = document.querySelector(".hamburger")
const errorText = document.querySelector(".errorMail")
const errorArea = document.querySelector(".errorArea")
const email = document.querySelector(".text")
const formBtn = document.querySelector(".contact__form-btnBox")
const textarea = document.querySelector(".textarea")
const footerYear = document.querySelector(".footeryear")
const allLinks = document.querySelectorAll(".navbar-mobile__link")
const bedBtn = document.querySelector(".bedBtn")
const kitchenCornerBtn = document.querySelector(".kitchenCornerBtn")
const loungeCornerBtn = document.querySelector(".loungeCornerBtn")

const formFunction = () => {
	checkMail()
	checkTextarea()
}

const checkTextarea = () => {
	if (textarea.value === "") {
		errorArea.style.visibility = "visible"
	} else {
		errorArea.style.visibility = "hidden"
	}
}

const checkMail = () => {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		errorText.style.visibility = "hidden"
	} else if (email.value === "") {
		errorText.style.visibility = "visible"
	} else {
		errorText.style.visibility = "visible"
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

formBtn.addEventListener("click", formFunction)
navBtn.addEventListener("click", handleNav)
handleCurrentYear()
