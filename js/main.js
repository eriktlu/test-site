function scrollTrigger(selector) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el)
    })
}

function addObserver(el){
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active')
                observer.unobserve(entry.target)
            }
        })
    })
    observer.observe(el)
}

scrollTrigger('.contact-us h3')
scrollTrigger('.contact-us iframe')
scrollTrigger('.contact-information')