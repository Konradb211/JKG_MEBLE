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

const furnituresList = () => {
	if (list.value === "bed") {
		beds.forEach(bed => (bed.style.display = "block"))
		kitchenCorners.forEach(
			kitchenCorner => (kitchenCorner.style.display = "none")
		)
		corners.forEach(corner => (corner.style.display = "none"))
		pouffe.style.display = "none"
	} else if (list.value === "kitchen-corner") {
		kitchenCorners.forEach(
			kitchenCorner => (kitchenCorner.style.display = "block")
		)
		beds.forEach(bed => (bed.style.display = "none"))
		corners.forEach(corner => (corner.style.display = "none"))
		pouffe.style.display = "none"
	} else if (list.value === "corner") {
		corners.forEach(corner => (corner.style.display = "block"))
		kitchenCorners.forEach(
			kitchenCorner => (kitchenCorner.style.display = "none")
		)
		beds.forEach(bed => (bed.style.display = "none"))
		pouffe.style.display = "none"
	} else if (list.value === "pouffe") {
		kitchenCorners.forEach(
			kitchenCorner => (kitchenCorner.style.display = "none")
		)
		beds.forEach(bed => (bed.style.display = "none"))
		corners.forEach(corner => (corner.style.display = "none"))
		pouffe.style.display = "block"
	} else if (list.value === "all") {
		kitchenCorners.forEach(
			kitchenCorner => (kitchenCorner.style.display = "block")
		)
		beds.forEach(bed => (bed.style.display = "block"))
		corners.forEach(corner => (corner.style.display = "block"))
		pouffe.style.display = "block"
	}
}

navBtn.addEventListener("click", handleNav)
handleCurrentYear()
list.addEventListener("change", furnituresList)
