let pageNo = 0;
showTestimonials();

// next/previous controls
function plusTestimonials(n) {
    pageNo += n;
    showTestimonials();
}

// Thumbnail image controls
function currentTestimonial(n) {
    pageNo = n;
    showTestimonials();
}

function showTestimonials() {
    let i;
    // Testimonials
    let testPerPage = 2;
    let testimonials = document.getElementsByClassName("testimonial");
    let testimonialsCount = testimonials.length;
    let pageCount = Math.ceil(testimonialsCount / testPerPage);

    if (pageNo < 0)
        pageNo = pageCount - 1;

    if (pageCount - 1 < pageNo)
        pageNo = 0;

    for (i = 0; i < testimonialsCount; i++) {
        testimonials[i].style.display = "none";
    }

    for (i = 0; i < testPerPage; i++) {
        let testimonialIndex = pageNo * testPerPage + i;
        if (testimonialIndex < testimonialsCount)
            testimonials[testimonialIndex].style.display = "block";
    }

    // Dots
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot-active", "");
    }

    dots[pageNo].className += " dot-active";
};

// nav link media query
const navToggleBtn = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggleBtn.onclick = () => {
    navLinks.classList.toggle('active');
}

document.onclick = (e) => {
    if(e.target.id !== 'nav-toggle2'){
        navLinks.classList.remove('active');
    }
}