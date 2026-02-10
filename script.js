/* ================= COUNTDOWN ================= */

const countdownDate = new Date("Feb 17, 2026 00:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000*60*60*24));
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    const seconds = Math.floor((distance%(1000*60))/1000);

    if(daysEl){
        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minutesEl.innerHTML = minutes;
        secondsEl.innerHTML = seconds;
    }
}, 1000);

/* ================= TEAM SLIDER ================= */

const teamMembers = [
  {img:"images/Divyam2.jpeg", name:"Divyam Mittal", role:"OEC"},
  {img:"images/aryan pal.jpg", name:"Aryan Pal", role:"OEC"},
  {img:"images/lakshay.jpg", name:"Lakshya", role:"EM & Marketing HEAD "},
  {img:"images/molika.jpg", name:"Molika", role:"EM & Marketing HEAD"},
  {img:"images/happy.jpg", name:"Happy", role:"EM Head & Technical Head"},
  {img:"images/vishwas.jpg", name:"Vishwas", role:"Logistics Head"},
  {img:"images/abhishek.jpg", name:"Abhishek", role:"Logistics Head"},
  {img:"images/prisha.jpg", name:"Prisha", role:"Technical Head"},
  {img:"images/Pulkit.jpg", name:"Pulkit", role:"Technical Head"},
  {img:"images/yuvraj.jpg", name:"Yuvraj", role:"Technical Head"},
  {img:"images/nishika.jpg", name:"Nishika", role:"Marketing Head"},
  {img:"images/aryan sharma.jpg", name:"Aryan Sharma", role:"Media Head"},
  {img:"images/geetika.jpg", name:"Geetika", role:"Media Head"},
  {img:"images/mehar.jpg", name:"Mehar", role:"Media Head"},
  {img:"images/kashvi.jpg", name:"Kashvi", role:"Publicity Head"},
  {img:"images/Ashit.jpeg", name:"Ashit", role:"Publicity Head"},
  {img:"images/arshita.jpg", name:"Arshita", role:"Creativity Head"},
  {img:"images/arshia.jpg", name:"Arshia", role:"Creativity Head"},
];
const slidesContainer = document.getElementById("slides");

if(slidesContainer){

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

    function updateSlider() {
        const cardWidth = slidesContainer.children[0].offsetWidth + 20;
        slidesContainer.style.transform =
            `translateX(${-index * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if(index < teamMembers.length - 3) index++;
        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        if(index > 0) index--;
        updateSlider();
    });
}

/* ================= NAV ACTIVE LINK ================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", ()=>{
    let current = "";
    sections.forEach(section=>{
        const sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop - 100){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href").includes(current)){
            link.classList.add("active");
        }
    });
});
function pad(n){
    return n < 10 ? "0" + n : n;
}
daysEl.innerHTML = pad(days);
hoursEl.innerHTML = pad(hours);
minutesEl.innerHTML = pad(minutes);
secondsEl.innerHTML = pad(seconds);
