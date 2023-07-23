add_button = document.getElementById("add-icon")
add_class_dropdown = document.getElementById("add-class-dropdown")


add_button.addEventListener("click", () => {
    add_class_dropdown.classList.toggle("show")
})