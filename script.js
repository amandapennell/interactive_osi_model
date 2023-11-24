const toggles = document.querySelectorAll('.layer-toggle')

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active')
  })
})