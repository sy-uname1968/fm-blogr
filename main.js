import './scss/styles.scss'

const mobileMenuToggler = document.querySelector(".mobile-menu-toggler")
const nav = document.querySelector("nav")

mobileMenuToggler.addEventListener("click", (e) => {
    const isTrueSet = (nav.dataset.menuOpened === 'true')
    nav.dataset.menuOpened = !isTrueSet
})

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches(".dropdown-btn")
    if (!isDropdownButton && e.target.closest("li.top-menu-item") != null) return
    
    let currentButton
    if (isDropdownButton) {
        currentButton = e.target
        const isTrueSet = (e.target.dataset.pressed === 'true')
        e.target.dataset.pressed = !isTrueSet
    }

    document.querySelectorAll('.dropdown-btn[data-pressed="true"]').forEach( btn => {
        if(btn === currentButton) return
        btn.dataset.pressed = false
    })

})