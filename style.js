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
