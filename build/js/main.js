const lineLottie = document.querySelector("#line-lottie");
const lineLottie2 = document.querySelector("#line-lottie2");
const lineLottie3 = document.querySelector("#line-lottie-style-2");
const lineLottie4 = document.querySelector("#line-lottie2-style-2");
const lineLottie5 = document.querySelector("#h2-faq-anim-right");
const lineLottie6 = document.querySelector("#h2-faq-anim-left");

function initlineLottie(selector) {
    if (selector) {
        lottie.loadAnimation({
            container: selector,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "./assets/lottie/left_lines.json",
        });
    }
}
initlineLottie(lineLottie);
initlineLottie(lineLottie2);
initlineLottie(lineLottie3);
initlineLottie(lineLottie4);
initlineLottie(lineLottie5);
initlineLottie(lineLottie6);
const grid = document.getElementById("win-grid");

function inCrease(grid) {
    if (grid) {
        for (let i = 0; i < 1000; i++) {
            const newElement = document.createElement("div");
            newElement.classList.add("win-btn");
            newElement.id = i;
            grid.appendChild(newElement);
        }
        const offset = 49;
        const angles = [];
        for (let i = 0; i <= 360; i += 45) {
            angles.push((i * Math.PI) / 180);
        }
        let nearBy = [];

        function clearNearBy() {
            nearBy.splice(0, nearBy.length).forEach((e) => (e.style.borderImage = null));
        }
        document.querySelectorAll(".win-btn").forEach((b) => {
            b.onmouseleave = (e) => {
                e.target.style.borderImage = null;
                e.target.border = "1px solid transparent";
            };
            b.onmouseenter = (e) => {
                clearNearBy();
            };
            b.addEventListener("mousemove", (e) => {
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.target.style.borderImage = `radial-gradient(20% 65% at ${x}px ${y}px ,rgba(121, 74, 255,0.7),rgba(121, 74, 255,0.4),rgba(121, 74, 255,0),#eaebf0,transparent ) 9 / 2px / 0px stretch `;
            });
        });
        const body = document.querySelector(".win-grid");
        body.addEventListener("mousemove", (e) => {
            const x = e.x;
            const y = e.y;
            clearNearBy();
            nearBy = angles.reduce((acc, rad, i, arr) => {
                const cx = Math.floor(x + Math.cos(rad) * offset);
                const cy = Math.floor(y + Math.sin(rad) * offset);
                const element = document.elementFromPoint(cx, cy);
                if (element !== null) {
                    if (element.className === "win-btn" && acc.findIndex((ae) => ae.id === element.id) < 0) {
                        const brect = element.getBoundingClientRect();
                        const bx = x - brect.left;
                        const by = y - brect.top;
                        if (!element.style.borderImage)
                            element.style.borderImage = `radial-gradient(${offset*2}px ${
offset*2
}px at ${bx}px ${by}px ,rgba(121, 74, 255,0.7),rgba(121, 74, 255,0.1),transparent ) 9 / 1px / 0px stretch `;
                        return [...acc, element];
                    }
                }
                return acc;
            }, []);
        });
        body.onmouseleave = (e) => {
            clearNearBy();
        };
    }
}
inCrease(grid);
const homeFourBanner = document.querySelector("#hero-banner");
const homeFourImag = document.querySelector("#hero-banner .img");
let perspectiveValue = 20;
if (homeFourBanner) {
    document.addEventListener("scroll", (e) => {
        const top = window.pageYOffset || document.documentElement.scrollTop;
        if (homeFourImag) {
            if (top > 500) {
                homeFourImag.style.transform = "none";
            } else {
                const calcValue = perspectiveValue + top / 2;
                homeFourImag.style.transform = `perspective(${calcValue}px) rotateX(1deg)`;
            }
        }
    });
}
const mdropMenu = document.querySelectorAll(".m-nav-dropdown");
if (mdropMenu) {
    mdropMenu.forEach((item) => {
        item.addEventListener("click", (e) => {
            event.target.nextElementSibling.classList.toggle("mobile-sub-nav");
        });
    });
}
window.addEventListener("scroll", () => {
    if (document.querySelector(".h1-header-sticky")) {
        if (window.scrollY >= 76) {
            document.querySelector(".h1-header-sticky").classList.remove("h1-header-sticky-qs");
        } else {
            document.querySelector(".h1-header-sticky").classList.add("h1-header-sticky-qs");
        }
    }
});
const tabList = document.querySelectorAll(".tab_item");
tabList.forEach((item) => {
    item.addEventListener("click", (event) => {
        tabList.forEach((item, index) => {
            if (item.getAttribute("name") === event.target.getAttribute("name")) {
                item.classList.add("active-tab");
                document.querySelector(".main-tab-section").scrollLeft = document.getElementById(event.target.getAttribute("name")).clientWidth * index;
            } else {
                item.classList.remove("active-tab");
            }
        });
    });
});

function typeWriter(selector_target, text_list, placeholder = false, i = 0, text_list_i = 0, delay_ms = 130) {
    if (!i) {
        if (placeholder) {
            Array.from(document.querySelectorAll(selector_target)).forEach((element) => (element.placeholder = ""));
        } else {
            Array.from(document.querySelectorAll(selector_target)).forEach((element) => (element.innerHTML = ""));
        }
    }
    txt = text_list[text_list_i];
    if (i < txt.length) {
        if (placeholder) {
            Array.from(document.querySelectorAll(selector_target)).forEach((element) => (element.placeholder += txt.charAt(i)));
        } else {
            Array.from(document.querySelectorAll(selector_target)).forEach((element) => (element.innerHTML += txt.charAt(i)));
        }
        i++;
        setTimeout(typeWriter, delay_ms, selector_target, text_list, placeholder, i, text_list_i);
    } else {
        text_list_i++;
        if (typeof text_list[text_list_i] === "undefined") {
            setTimeout(typeWriter, delay_ms * 5, selector_target, text_list, placeholder);
        } else {
            i = 0;
            setTimeout(typeWriter, delay_ms * 3, selector_target, text_list, placeholder, i, text_list_i);
        }
    }
}
text_list = ["Keyword search...", " "];
text_list2 = ["Email Address...", " "];
text_list3 = ["Full Name...", " "];
text_list4 = ["Your message...", " "];
text_list5 = ["Search...", ""];
text_list6 = ["Coupon Code", ""];
return_value = typeWriter("#h2_search_input", text_list, true);
return_value1 = typeWriter("#eOne", text_list2, true);
return_value2 = typeWriter("#eTwo", text_list2, true);
return_value3 = typeWriter("#eThree", text_list2, true);
return_value4 = typeWriter("#eFour", text_list2, true);
return_value5 = typeWriter("#eFive", text_list2, true);
return_value6 = typeWriter("#fullName", text_list3, true);
return_value7 = typeWriter("#message", text_list4, true);
return_value7 = typeWriter("#search", text_list5, true);
return_value8 = typeWriter("#coupon", text_list6, true);
const videoBtn = document.querySelectorAll(".video-play-btn");
videoBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const player = document.getElementById("video-player");
        player.classList.toggle("active-video-player");
    });
});
if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    let device_width = window.innerWidth;
    if (device_width > 100) {
        ScrollSmoother.create({
            smooth: 1.5,
            effects: device_width >= 1025,
            smoothTouch: false,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }
    const progressWrapper = document.querySelector("#progress-wrapper");
    if (device_width > 1280 && progressWrapper) {
        const height = progressWrapper.clientHeight - progressThumbHeight;
        ScrollTrigger.create({
            trigger: ".sticky",
            start: "top 20px",
            end: "bottom 320px",
            pin: true,
            pinSpacing: false,
        });
    }
}
$(document).ready(function() {
    setTimeout(function() {
        $("#container-preloader").addClass("loaded");
        if ($("#container-preloader").hasClass("loaded")) {
            $("#preloader").delay(1000).queue(function() {
                $(this).remove();
            });
        }
    }, 2000);
});
const gridDark = document.getElementById("win-grid-dark");

function inCreaseDark(grid) {
    if (grid) {
        for (let i = 0; i < 1000; i++) {
            const newElement = document.createElement("div");
            newElement.classList.add("win-btn-sm");
            newElement.id = i;
            grid.appendChild(newElement);
        }
        const offset = 49;
        const angles = [];
        for (let i = 0; i <= 360; i += 45) {
            angles.push((i * Math.PI) / 180);
        }
        let nearBy = [];

        function clearNearBy() {
            nearBy.splice(0, nearBy.length).forEach((e) => (e.style.borderImage = null));
        }
        document.querySelectorAll(".win-btn-sm").forEach((b) => {
            b.onmouseleave = (e) => {
                e.target.style.borderImage = null;
                e.target.border = "1px solid transparent";
            };
            b.onmouseenter = (e) => {
                clearNearBy();
            };
            b.addEventListener("mousemove", (e) => {
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
            });
        });
        const body = document.querySelector(".win-grid-dark");
        if (body) {
            body.addEventListener("mousemove", (e) => {
                const x = e.x;
                const y = e.y;
                clearNearBy();
                nearBy = angles.reduce((acc, rad, i, arr) => {
                    const cx = Math.floor(x + Math.cos(rad) * offset);
                    const cy = Math.floor(y + Math.sin(rad) * offset);
                    const element = document.elementFromPoint(cx, cy);
                    if (element !== null) {
                        if (element.className === "win-btn-sm" && acc.findIndex((ae) => ae.id === element.id) < 0) {
                            const brect = element.getBoundingClientRect();
                            const bx = x - brect.left;
                            const by = y - brect.top;
                            if (!element.style.borderImage)
                                element.style.borderImage = `radial-gradient(${
offset*1.5
}px ${
offset*1.5
}px at ${bx}px ${by}px ,#00DF8E 0%,rgba(0, 223, 142, 0) 100%,transparent ) 9 / 1px / 0px stretch `;
                            return [...acc, element];
                        }
                    }
                    return acc;
                }, []);
            });
            body.onmouseleave = (e) => {
                clearNearBy();
            };
        }
    }
}
inCreaseDark(gridDark);
const dropdown = document.getElementById("dropdown-box");
if (dropdown) {
    dropdown.addEventListener("click", (event) => {
        event.target.nextElementSibling.classList.toggle("dropdown-deActive");
    });
}
if (dropdown) {
    window.addEventListener("click", (e) => {
        if (!e.target.classList.value.includes("dropdown")) {
            document.querySelectorAll(".dropdown-div").forEach((element) => {
                if (!element.classList.value.includes("dropdown-deActive")) {
                    element.classList.add("dropdown-deActive");
                }
            });
        }
    });
}