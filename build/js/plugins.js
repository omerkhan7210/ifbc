const testimonialSwiper = document.querySelector(".testimonial-swiper");
if (testimonialSwiper) {
    var swiper = new Swiper(testimonialSwiper, {
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
if (document.getElementsByClassName("h3-partner_slider")) {
    new Swiper(".h3-partner_slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: false,
        navigation: false,
        breakpoints: {
            640: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 50,
            },
        },
    });
}
if (document.getElementsByClassName("h1-partner_slider")) {
    new Swiper(".h1-partner_slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: false,
        navigation: false,
        breakpoints: {
            640: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 50,
            },
        },
    });
}
const h2Faqs = document.querySelectorAll(".h2-faq-toggler");
window.addEventListener("load", (event) => {
    h2Faqs.forEach((item, index) => {
        if (index !== 0) {
            item.style.height = item.children[0].clientHeight + 40 + "px";
        }
    });
});
if (h2Faqs) {
    h2Faqs.forEach((item) => {
        item.addEventListener("click", (e) => {
            h2Faqs.forEach((faq) => {
                if (e.target.getAttribute("name") === faq.getAttribute("name")) {
                    item.style.height = item.children[0].clientHeight +
                        item.children[1].clientHeight +
                        50 +
                        "px";
                } else {
                    faq.style.height = faq.children[0].clientHeight + 40 + "px";
                }
            });
        });
    });
}
const h4Faqs = document.querySelectorAll(".h4-faq-toggler");
window.addEventListener("load", (event) => {
    h4Faqs.forEach((item, index) => {
        if (index !== 0) {
            item.style.height = item.children[0].clientHeight + 40 + "px";
        }
    });
});
if (h4Faqs) {
    h4Faqs.forEach((item) => {
        item.addEventListener("click", (e) => {
            h4Faqs.forEach((faq) => {
                if (e.target.getAttribute("name") === faq.getAttribute("name")) {
                    item.style.height = item.children[0].clientHeight +
                        item.children[1].clientHeight +
                        50 +
                        "px";
                    item.classList.add("single_faq_bg");
                } else {
                    faq.style.height = faq.children[0].clientHeight + 40 + "px";
                    faq.classList.remove("single_faq_bg");
                }
            });
        });
    });
}
const serviceFaqs = document.querySelectorAll(".service-faq-toggler");
window.addEventListener("load", (event) => {
    serviceFaqs.forEach((item, index) => {
        if (index !== 0) {
            item.style.height = item.children[0].clientHeight + 40 + "px";
        }
    });
});
if (serviceFaqs) {
    serviceFaqs.forEach((item) => {
        item.addEventListener("click", (e) => {
            serviceFaqs.forEach((faq) => {
                if (e.target.getAttribute("name") === faq.getAttribute("name")) {
                    item.style.height = item.children[0].clientHeight +
                        item.children[1].clientHeight +
                        56 +
                        "px";
                    item.classList.add("bg-purple/5");
                } else {
                    faq.style.height = faq.children[0].clientHeight + 40 + "px";
                    faq.classList.remove("bg-purple/5");
                }
            });
        });
    });
}
const h6Faqs = document.querySelectorAll(".h6-faq-toggler");
window.addEventListener("load", (event) => {
    h6Faqs.forEach((item, index) => {
        if (index !== 0) {
            item.style.height = item.children[0].clientHeight + 40 + "px";
        }
    });
});
if (h6Faqs) {
    h6Faqs.forEach((item) => {
        item.addEventListener("click", (e) => {
            h6Faqs.forEach((faq) => {
                if (e.target.getAttribute("name") === faq.getAttribute("name")) {
                    item.style.height = item.children[0].clientHeight +
                        item.children[1].clientHeight +
                        56 +
                        "px";
                    item.classList.add("bg-orange/10");
                } else {
                    faq.style.height = faq.children[0].clientHeight + 40 + "px";
                    faq.classList.remove("bg-orange/10");
                }
            });
        });
    });
}
const faqs2 = document.querySelectorAll(".faq-toggler-2");
window.addEventListener("load", (event) => {
    faqs2.forEach((item, index) => {
        if (index !== 0) {
            item.style.height = item.children[0].clientHeight + 40 + "px";
        }
    });
});
if (faqs2) {
    faqs2.forEach((item) => {
        item.addEventListener("click", (e) => {
            faqs2.forEach((faq) => {
                if (e.target.getAttribute("name") === faq.getAttribute("name")) {
                    item.style.height = item.children[0].clientHeight +
                        item.children[1].clientHeight +
                        56 +
                        "px";
                    item.classList.add("bg-purple/5");
                } else {
                    faq.style.height = faq.children[0].clientHeight + 40 + "px";
                    faq.classList.remove("bg-purple/5");
                }
            });
        });
    });
}
const h8Faqs = document.querySelectorAll(".h8-faq-toggler");
window.addEventListener("load", (event) => {
    h8Faqs.forEach((item, index) => {
        if (index !== 0) {
            item.style.height = item.children[0].clientHeight + 40 + "px";
        }
    });
});
if (h8Faqs) {
    h8Faqs.forEach((item) => {
        item.addEventListener("click", (e) => {
            h8Faqs.forEach((faq) => {
                if (e.target.getAttribute("name") === faq.getAttribute("name")) {
                    item.style.height = item.children[0].clientHeight +
                        item.children[1].clientHeight +
                        56 +
                        "px";
                    item.classList.add("bg-blue-sass/5");
                } else {
                    faq.style.height = faq.children[0].clientHeight + 40 + "px";
                    faq.classList.remove("bg-blue-sass/5");
                }
            });
        });
    });
}
const h9Faqs = document.querySelectorAll(".h9-faq-toggler");
window.addEventListener("load", (event) => {
    h9Faqs.forEach((item, index) => {
        if (index !== 0) {
            item.style.height = item.children[0].clientHeight + 40 + "px";
        }
    });
});
if (h9Faqs) {
    h9Faqs.forEach((item) => {
        item.addEventListener("click", (e) => {
            h9Faqs.forEach((faq) => {
                if (e.target.getAttribute("name") === faq.getAttribute("name")) {
                    item.style.height = item.children[0].clientHeight +
                        item.children[1].clientHeight +
                        56 +
                        "px";
                    item.classList.add("bg-app-main");
                } else {
                    faq.style.height = faq.children[0].clientHeight + 40 + "px";
                    faq.classList.remove("bg-app-main");
                }
            });
        });
    });
}
const partnerSwiper = document.getElementsByClassName("partnerSwiper");
if (partnerSwiper) {
    new Swiper(".partnerSwiper", {
        slidesPerView: 2.5,
        spaceBetween: 40,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: false,
        navigation: {
            nextEl: ".h2-case-study-next",
            prevEl: ".h2-case-study-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4.5,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5.5,
                spaceBetween: 50,
            },
        },
    });
}
if (document.getElementsByClassName("case_study_slider")) {
    new Swiper(".case_study_slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".h2-case-study-next",
            prevEl: ".h2-case-study-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
}
if (document.getElementsByClassName("vsliderSm")) {
    new Swiper(".vsliderSm", {
        direction: "vertical",
        slidesPerView: 2,
        spaceBetween: 10,
        freeMode: true,
        speed: 5000,
        loop: true,
        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },
    });
}
if (document.getElementsByClassName("vslider")) {
    new Swiper(".vslider", {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        freeMode: true,
        speed: 5000,
        autoplay: {
            delay: -10,
            reverseDirection: true,
            disableOnInteraction: false,
        },
    });
}
if (document.getElementsByClassName("h2-testimonial-slider")) {
    new Swiper(".h2-testimonial-slider", {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        pagination: {
            el: ".h2-testimonial-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".h2-testimonials-next",
            prevEl: ".h2-testimonials-prev",
        },
    });
}
if (document.getElementsByClassName("h3-testimonial-slider")) {
    new Swiper(".h3-testimonial-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".h3-testimonial-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".h3-testimonial-next",
            prevEl: ".h3-testimonial-prev",
        },
    });
}
if (document.getElementsByClassName("h5-story-slider")) {
    new Swiper(".h5-story-slider", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        speed: 5000,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".h5-story-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".h5-story-next",
            prevEl: ".h5-story-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });
}
if (document.getElementsByClassName("h5_hero_slider")) {
    new Swiper(".h5_hero_slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: false,
        navigation: {
            nextEl: ".h5-hero-next",
            prevEl: ".h5-hero-prev",
        },
    });
}
if (document.getElementsByClassName("h5-testimonial-slider")) {
    new Swiper(".h5-testimonial-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".h5-testimonial-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".h5-testimonial-next",
            prevEl: ".h5-testimonial-prev",
        },
    });
}
if (document.getElementsByClassName("h5-client_slider")) {
    new Swiper(".h5-client_slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: false,
        navigation: false,
        breakpoints: {
            640: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 50,
            },
        },
    });
}
if (document.getElementById("h5-header")) {
    window.addEventListener("scroll", (event) => {
        if (window.scrollY > 98) {
            document.getElementById("h5-header").classList.add("bg-buisness-light-black");
        } else {
            document.getElementById("h5-header").classList.remove("bg-buisness-light-black");
        }
    });
}
const navBtn = document.querySelectorAll(".toggle_nav_menu");
if (navBtn) {
    navBtn.forEach((element) => {
        element.addEventListener("click", (event) => {
            document.getElementById("mobile-nav-div").classList.toggle("active_mobile_nav");
            document.getElementById("mobile-nav-div-overlay").classList.toggle("active_mobile_nav");
            event.target.children[0].classList.toggle("hidden");
            event.target.children[1].classList.toggle("hidden");
        });
    });
    if (document.getElementById("mobile-nav-div-overlay")) {
        document.getElementById("mobile-nav-div-overlay").addEventListener("click", () => {
            document.getElementById("mobile-nav-div").classList.remove("active_mobile_nav");
            document.getElementById("mobile-nav-div-overlay").classList.remove("active_mobile_nav");
            document.getElementById("mobile_nav_toggle_menu").children[0].classList.remove("hidden");
            document.getElementById("mobile_nav_toggle_menu").children[1].classList.add("hidden");
        });
    }
}
window.addEventListener("hashchange", (event) => {
    document.getElementById("mobile-nav-div").classList.toggle("active_mobile_nav");
    document.getElementById("mobile-nav-div-overlay").classList.toggle("active_mobile_nav");
    document.getElementById("mobile_nav_toggle_menu").children[0].classList.toggle("hidden");
    document.getElementById("mobile_nav_toggle_menu").children[1].classList.toggle("hidden");
});
let running = [];
const scrollAnimate = (event) => {
    const allData = document.querySelectorAll("[data-scroll-qs='scroll']");
    if (allData) {
        allData.forEach((item) => {
            const rect = item.getBoundingClientRect() ? .y;
            if (rect - window.innerHeight <= 0 && rect >= 0) {
                if (running.indexOf(item) < 0) {
                    if (item.getAttribute("data-count-qs")) {
                        let countdown = null;
                        const count = Number(item.getAttribute("data-count-qs"));
                        const valueType = item.getAttribute("data-type-qs");
                        const speed = Number(item.getAttribute("data-speed-qs"));
                        let startNumber = 0;
                        clearInterval(countdown);
                        countdown = setInterval(function() {
                            item.innerText = startNumber + valueType;
                            startNumber++;
                            if (startNumber > count) {
                                clearInterval(countdown);
                            }
                        }, speed / count);
                    }
                    running.push(item);
                }
            } else {
                running = running.filter((value) => value != item);
            }
        });
    }
};
window.addEventListener("load", (event) => {
    scrollAnimate(event);
});
window.addEventListener("scroll", (event) => {
    scrollAnimate(event);
});

function mouseMoveParallax(selectorId) {
    let scene = document.getElementById(`${selectorId}`);
    if (scene) {
        let parallaxInstance = new Parallax(scene);
    }
}
mouseMoveParallax("hero-mouse-move-anim");
mouseMoveParallax("home-working-cursor-anim");
mouseMoveParallax("consaltaion-mouse-move-anim");
mouseMoveParallax("hero-three-cm-anim");
mouseMoveParallax("home-one-about-mouse-anim");
mouseMoveParallax("about-shape-mouse-anim");
mouseMoveParallax("home-four-cta-mouse-move");
if (document.getElementsByClassName("h6-catagory-slider")) {
    new Swiper(".h6-catagory-slider", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        speed: 5000,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".h5-story-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".h5-story-next",
            prevEl: ".h5-story-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });
}
if (document.getElementsByClassName("h7-partner_slider")) {
    new Swiper(".h7-partner_slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: false,
        navigation: false,
        breakpoints: {
            640: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 50,
            },
            1600: {
                slidesPerView: 7,
                spaceBetween: 50,
            },
        },
    });
}
const h7Faqs = document.querySelectorAll(".h7-faq-toggler");
window.addEventListener("load", (event) => {
    h7Faqs.forEach((item, index) => {
        if (index !== 0) {
            item.style.height = item.children[0].clientHeight + 40 + "px";
        }
    });
});
if (h7Faqs) {
    h7Faqs.forEach((item) => {
        item.addEventListener("click", (e) => {
            h7Faqs.forEach((faq) => {
                if (e.target.getAttribute("name") === faq.getAttribute("name")) {
                    item.style.height = item.children[0].clientHeight +
                        item.children[1].clientHeight +
                        56 +
                        "px";
                    item.classList.add("bg-it-blue/10");
                    item.classList.add("active-h7-faq");
                } else {
                    faq.style.height = faq.children[0].clientHeight + 40 + "px";
                    faq.classList.remove("bg-it-blue/10");
                    faq.classList.remove("active-h7-faq");
                }
            });
        });
    });
}
if (document.getElementsByClassName("h10-service-slider")) {
    new Swiper(".h10-service-slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        speed: 5000,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".h10-service-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".h10-service-next",
            prevEl: ".h10-service-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}