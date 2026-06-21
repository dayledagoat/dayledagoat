```javascript
// Sidebar selection

const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach(button=>{

button.addEventListener("click",()=>{

bubbles.forEach(b=>b.classList.remove("active"));

button.classList.add("active");

});

});


// 3D cards

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateX = (rect.height/2-y)/10;
const rotateY = (x-rect.width/2)/10;

card.style.transform =
`
perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg)";

});

});


// Floating profile icon

const profile = document.querySelector(".profile");

let angle = 0;

setInterval(()=>{

angle += 0.02;

profile.style.transform =
`translateY(${Math.sin(angle)*6}px)`;

},16);
```
// 4. Video Modal Popup Logic
const videoCards = document.querySelectorAll(".card");
const modal = document.getElementById("videoModal");
const modalPlayer = document.getElementById("modalPlayer");
const closeBtn = document.querySelector(".modal-close");

// Open Video when clicking a Card
videoCards.forEach(card => {
    card.addEventListener("click", () => {
        const videoUrl = card.getAttribute("data-video");
        if (videoUrl) {
            modalPlayer.src = videoUrl;
            modal.classList.add("open");
            modalPlayer.play();
        }
    });
});

// Close Video Function
function closeModal() {
    modal.classList.remove("open");
    modalPlayer.pause();
    modalPlayer.src = ""; // Resets video load state
}

// Close events
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(); // Closes only if background clicked
});
