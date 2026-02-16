/* ================= COUNTDOWN ================= */

const countdownDate = new Date("Feb 19, 2026 00:17:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) {
        daysEl.innerText = d;
        hoursEl.innerText = h;
        minutesEl.innerText = m;
        secondsEl.innerText = s;
    }
}, 1000);

/* ================= TEAM SLIDER ================= */

const teamMembers = [
    { img: "images/Divyam2.jpeg", name: "Divyam Mittal", role: "OEC" },
    { img: "images/aryan pal.jpg", name: "Aryan Pal", role: "OEC" },
    { img: "images/lakshay.jpg", name: "Lakshya", role: "EM & Marketing HEAD " },
    { img: "images/molika.jpg", name: "Molika", role: "EM & Marketing HEAD" },
    { img: "images/happy.jpg", name: "Happy Singh Rajpurohit", role: "EM Head & Technical Head" },
    { img: "images/prisha.jpg", name: "Prisha", role: "Technical Head" },
    { img: "images/yuvraj.jpg", name: "Yuvraj", role: "Technical Head" },
    { img: "images/Pulkit.jpg", name: "Pulkit", role: "Technical Head" },
    { img: "images/nishika.jpg", name: "Nishika", role: "Marketing Head" },
    { img: "images/aryan sharma.jpg", name: "Aryan Sharma", role: "Media Head" },
    { img: "images/Geetika.jpeg", name: "Geetika", role: "Media Head" },
    { img: "images/manya2.jpeg", name: "Manya", role: "Media Head" },
    { img: "images/mehar.jpg", name: "Mehar", role: "Media Head" },
    { img: "images/vishwas.jpg", name: "Vishwas", role: "Logistics Head" },
    { img: "images/abhishek.jpg", name: "Abhishek", role: "Logistics Head" },
    { img: "images/kashvi.jpg", name: "Kashvi", role: "Publicity Head" },
    { img: "images/Ashit.jpeg", name: "Ashit", role: "Publicity Head" },
    { img: "images/arshita.jpg", name: "Arshita", role: "Creativity Head" },
    { img: "images/arshia.jpg", name: "Arshia", role: "Creativity Head" },
];
const slidesContainer = document.getElementById("slides");

if (slidesContainer) {
    // Restore original slider logic
    teamMembers.forEach(member => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${member.img}" alt="${member.name}">
            <div class="card-info">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
        `;
        slidesContainer.appendChild(card);
    });

    let index = 0;
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let cardsToShow = window.innerWidth < 768 ? 1 : 3;
    let maxIndex = teamMembers.length - cardsToShow;

    function updateSliderParams() {
        cardsToShow = window.innerWidth < 768 ? 1 : 3;
        maxIndex = teamMembers.length - cardsToShow;
        // Clamp index if out of bounds after resize
        if (index > maxIndex) index = maxIndex;
        updateSlider();
    }

    function updateSlider() {
        // Recalculate based on current screen width
        const card = slidesContainer.querySelector('.card');
        if (!card) return;

        const style = window.getComputedStyle(card);
        // Correctly handle gap. .slides has gap: 20px. 
        // If we use flex gap, the visual distance is cardWidth + gap.
        // margin-right might be 0 if using gap property.
        // Let's rely on gap from slides container style if needed, or assume fixed 20.
        // CSS says gap: 20px.
        const gap = 20;
        const cardWidth = card.offsetWidth + gap;

        slidesContainer.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    // Auto-scroll logic
    let autoScrollInterval = setInterval(() => {
        if (index < maxIndex) {
            index++;
        } else {
            index = 0; // Loop back to start
        }
        updateSlider();
    }, 3000); // 3 seconds

    const resetInterval = () => {
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(() => {
            if (index < maxIndex) {
                index++;
            } else {
                index = 0;
            }
            updateSlider();
        }, 3000);
    };

    if (nextBtn) {
        nextBtn.style.display = "block"; // Ensure visible
        nextBtn.addEventListener("click", () => {
            if (index < maxIndex) index++;
            else index = 0; // Loop
            updateSlider();
            resetInterval();
        });
    }

    if (prevBtn) {
        prevBtn.style.display = "block"; // Ensure visible
        prevBtn.addEventListener("click", () => {
            if (index > 0) index--;
            else index = maxIndex;
            updateSlider();
            resetInterval();
        });
    }

    // Pause on hover
    slidesContainer.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    slidesContainer.addEventListener('mouseleave', resetInterval);

    // Handle resize
    window.addEventListener('resize', () => {
        updateSliderParams();
    });
}


/* ================= EVENT CARDS (MOBILE CLICK) ================= */
const curtainCards = document.querySelectorAll('.curtain-card');

curtainCards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle this card
        card.classList.toggle('active');

        // Optional: Close others (Accordion style)
        curtainCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('active');
            }
        });
    });
});

/* ================= NAV ACTIVE LINK ================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
function pad(n) {
    return n < 10 ? "0" + n : n;
}
daysEl.innerHTML = pad(days);
hoursEl.innerHTML = pad(hours);
minutesEl.innerHTML = pad(minutes);
secondsEl.innerHTML = pad(seconds);

/* ================= MOBILE NAV ================= */
const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        const icon = hamburgerBtn.querySelector("i");
        if (mobileMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
            document.body.style.overflow = "hidden"; // Prevent background scrolling
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
            document.body.style.overflow = "auto";
        }
    });

    // Close menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            const icon = hamburgerBtn.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
            document.body.style.overflow = "auto";
        });
    });
}
