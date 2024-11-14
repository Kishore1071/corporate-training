let home = document.getElementById('home-container')
let about = document.getElementById('about-container')
let contact = document.getElementById('contact-container')
let services = document.getElementById('services-container')

about.style.display = 'none'
contact.style.display = 'none'
services.style.display = 'none'

function Home() {
    home.style.display = 'block'
    about.style.display = 'none'
    contact.style.display = 'none'
    services.style.display = 'none'
}

function About() {
    home.style.display = 'none'
    about.style.display = 'block'
    contact.style.display = 'none'
    services.style.display = 'none'
}

function Contact() {
    home.style.display = 'none'
    about.style.display = 'none'
    contact.style.display = 'block'
    services.style.display = 'none'
}

function Services() {
    home.style.display = 'none'
    about.style.display = 'none'
    contact.style.display = 'none'
    services.style.display = 'block'
}

