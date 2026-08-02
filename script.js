console.log("SCRIPT STARTED");
/* =====================================
      PREMIUM SORRY APP
      PART 3A
===================================== */

const pages=document.querySelectorAll(".page");

const bgMusic=document.getElementById("bgMusic");

const clickSound=document.getElementById("clickSound");

const typing=document.getElementById("typing");

const typing2=document.getElementById("typing2");

const resultCard=document.getElementById("resultCard");

const finalCard=document.getElementById("finalCard");

let currentPage=1;

let musicStarted=false;


/* ==============================
        CHANGE PAGE
============================== */

function showPage(id){

pages.forEach(page=>{

page.classList.remove("active");

});

document
.getElementById(id)
.classList.add("active");

}


/* ==============================
       START MUSIC
============================== */

function startMusic(){

if(!bgMusic)
return;

if(musicStarted)
return;

bgMusic.volume=.35;

bgMusic.play().catch(()=>{});

musicStarted=true;

}


/* ==============================
      CLICK SOUND
============================== */

function playClick(){

if(clickSound){

clickSound.currentTime=0;

clickSound.play().catch(()=>{});

}

}


/* ==============================
      BUTTON EVENTS
============================== */

const openBtn=document.getElementById("openLetter");

if(openBtn){

openBtn.onclick=function(){

alert("OPEN BUTTON WORKING");

playClick();

startMusic();

document.querySelector(".envelope")
.classList.add("openEnvelope");

setTimeout(()=>{

showPage("page2");

startTyping();

},700);

};

}




document
.getElementById("continue1")
.onclick=function(){

playClick();

showPage("page3");

startTyping2();

};



document
.getElementById("continue2")
.onclick=function(){

playClick();

showPage("page4");

};



document
.getElementById("continue3")
.onclick=function(){

playClick();

showPage("page7");

};



document
.getElementById("finish")
.onclick=function(){

playClick();

showPage("page9");

};


/* ==============================
      FIRST LETTER
============================== */

const message1=[

"Hii Madam 😊",

"Sabse pehle...",

"I'm Really Really Sorry 🥺",

"Mera intention kabhi bhi aapko hurt karna nahi tha.",

"Tube Light wala joke bas mazaak tha.",

"Lekin mujhe pata hai...",

"Meri wajah se aap upset ho gayi.",

"Aur iska mujhe sach me bura lag raha hai.",

"Please mujhe maaf kar dijiye ❤️"

];

let line1=0;

let char1=0;


function startTyping(){

typing.innerHTML="";

line1=0;

char1=0;

type1();

}


function type1(){

if(line1>=message1.length)
return;

if(char1<message1[line1].length){

typing.innerHTML+=

message1[line1].charAt(char1);

char1++;

setTimeout(type1,35);

}

else{

typing.innerHTML+="<br><br>";

line1++;

char1=0;

setTimeout(type1,350);

}

}



/* ==============================
 SECOND LETTER
============================== */

const message2=[

"Happy Friendship Day Madam 🌸",

"Aap meri everything ho my cute momo💖.",

"Main nahi chahta tha ki Friendship Day pe aap upset ho.",

"Isliye ye chhota sa surprise banaya 😊",

"Ab ek honest question... 🥺"

];

let line2=0;

let char2=0;


function startTyping2(){

typing2.innerHTML="";

line2=0;

char2=0;

type2();

}



function type2(){

if(line2>=message2.length)
return;

if(char2<message2[line2].length){

typing2.innerHTML+=

message2[line2].charAt(char2);

char2++;

setTimeout(type2,35);

}

else{

typing2.innerHTML+="<br><br>";

line2++;

char2=0;

setTimeout(type2,350);

}

}
/* =====================================
        PART 3B
===================================== */


/* =====================================
      FUNNY ESCAPE BUTTONS V2
===================================== */

const noBtn = document.getElementById("no");
const runBtn = document.getElementById("runAway");

let noCount = 0;
let runCount = 0;

const noTexts = [

"😜 Pakad ke dikhao Madam",

"🥺 Please maan jao na",

"💖 Ek smile toh banti hai",

"🧸 Teddy bhi bol raha hai sorry"

];

const runTexts = [

"😂 Arre nahi Madam",

"🥹 Itna gussa?",

"🌸 Smile please",

"❤️ Accha maan jao na"

];

function moveButton(btn){

    const app = document.getElementById("app");

    const maxX = app.clientWidth - btn.offsetWidth - 20;
    const maxY = app.clientHeight - btn.offsetHeight - 20;

    const x = Math.max(10, Math.random()*maxX);
    const y = Math.max(10, Math.random()*maxY);

    btn.style.position="absolute";
    btn.style.left=x+"px";
    btn.style.top=y+"px";

}

function setupEscape(btn,texts,isNo){

    if(!btn) return;

    btn.addEventListener("click",function(e){

        e.preventDefault();
        e.stopPropagation();

        let count = isNo ? noCount : runCount;

        if(count < 4){

            moveButton(btn);

            btn.innerHTML=texts[count];

            if(isNo)
                noCount++;
            else
                runCount++;

            if(count==3){

                setTimeout(()=>{

                    teddyPopup();

                },500);

            }

        }
        else{

            btn.innerHTML="🥰 sorry na puchu maan jao";

        }

    });

}

setupEscape(noBtn,noTexts,true);
setupEscape(runBtn,runTexts,false);

/* ===========================
        YES BUTTON
=========================== */

const yesBtn=document.querySelector(".yes");

if(yesBtn){

yesBtn.onclick=function(){

playClick();

showPage("page5");

};

}

/* ===========================
       LEVEL BUTTONS
=========================== */

const levels=document.querySelectorAll(".level");

levels.forEach(btn=>{

btn.onclick=function(){

playClick();

let value=this.dataset.value;

showResult(value);

};

});


/* ===========================
        RESULT CARD
=========================== */

function showResult(value){

showPage("page6");

heartExplosion();

confettiRain();

if(value=="100"){

resultCard.innerHTML=`

<h2>Thank You Madam ❤️</h2>

<br>

🥹

<br><br>

Aapne mujhe maaf kar diya...

Ab mera Friendship Day bach gaya.

🌸

`;

}


else if(value=="200"){

resultCard.innerHTML=`

<h2>Best Friend Award 🏆</h2>

<br>

🥺❤️

<br><br>

Aap duniya ki sabse sweet Madam ho.

`;

}

else{

resultCard.innerHTML=`

<h2>Infinity ❤️</h2>

<br>

👑

<br><br>

Achievement Unlocked

<br><br>

World's Sweetest Best Friend

🌸❤️

`;

}

}


/* ===========================
     HEART EXPLOSION
=========================== */

function heartExplosion(){

const emoji=[

"💖",

"💕",

"💗",

"❤️",

"🌸",

"💞",

"💝"

];

for(let i=0;i<90;i++){

let h=document.createElement("div");

h.className="heart";

h.innerHTML=

emoji[Math.floor(Math.random()*emoji.length)];

h.style.left=Math.random()*100+"vw";

h.style.top=Math.random()*100+"vh";

h.style.fontSize=(18+Math.random()*18)+"px";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},4500);

}

}


/* ===========================
      CONFETTI
=========================== */

function confettiRain(){

const colors=[

"#ff4f91",

"#ff84bb",

"#ffd4e8",

"#fff",

"#ffe16b"

];

for(let i=0;i<140;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.background=

colors[Math.floor(Math.random()*colors.length)];

c.style.left=Math.random()*100+"vw";

c.style.animationDuration=

(2+Math.random()*3)+"s";

document.body.appendChild(c);

setTimeout(()=>{

c.remove();

},5000);

}

}


/* ===========================
     FLOATING HEARTS
=========================== */

setInterval(()=>{

let heart=document.createElement("div");

heart.className="smallHeart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

},900);
/* =====================================
        PART 3C
===================================== */


/* ===========================
      SMILE BUTTON
=========================== */

const smileBtn=document.getElementById("smile");

if(smileBtn){

smileBtn.onclick=function(){

playClick();

heartExplosion();

confettiRain();

createBubbles();

smileMessage();

showFinal();

};

}


/* ===========================
      FINAL CARD
=========================== */

function showFinal(){

showPage("page8");

finalCard.innerHTML=`

<div class="premiumCard secretGlow">

<h2 class="glowText">

🥹 Thank You Madam ❤️

</h2>

<br>

🧸

<br><br>

Thank you...

for opening this little surprise.

<br><br>

Mujhe pata hai...

ek chhoti si line kaafi hoti hai hurt hone mai,sorry babu

aap hurt ho gayi,maaf kardo cutipie......

<br><br>

Believe me...

mera intention kabhi bhi

aapko upset karna nahi tha.

<br><br>

Tube Light wala joke...

officially retired......😌

<br><br>

🌸 Happy Friendship Day dear madammm🌸

<br><br>

Aap meri everything ho my cute momo💖.

<br><br>

Promise...

Next time mazaak karunga...

toh limit me 😅pakka🤝.....

<br><br>

❤️ Friends Forever ❤️

</div>

`;

}


/* ===========================
       FINISH BUTTON
=========================== */

document.getElementById("finish").onclick=function(){

playClick();

showSecret();

};


/* ===========================
      SECRET PAGE
=========================== */

function showSecret(){

showPage("page9");

heartExplosion();

confettiRain();

createStars();

createBubbles();

}


/* ===========================
        STARS
=========================== */

function createStars(){

for(let i=0;i<40;i++){

let star=document.createElement("div");

star.className="star";

star.innerHTML="⭐";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(12+Math.random()*18)+"px";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},6000);

}

}


/* ===========================
       BUBBLES
=========================== */

function createBubbles(){

for(let i=0;i<35;i++){

let bubble=document.createElement("div");

bubble.className="bubble";

bubble.style.left=Math.random()*100+"vw";

bubble.style.width=(10+Math.random()*25)+"px";

bubble.style.height=bubble.style.width;

bubble.style.animationDuration=(4+Math.random()*5)+"s";

document.body.appendChild(bubble);

setTimeout(()=>{

bubble.remove();

},8000);

}

}


/* ===========================
    DREAM EFFECT LOOP
=========================== */

setInterval(()=>{

let sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.fontSize="18px";

sparkle.style.pointerEvents="none";

sparkle.style.opacity=".7";

sparkle.style.zIndex="999";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},1200);

},700);


/* ===========================
      HEART LOOP
=========================== */

setInterval(()=>{

let h=document.createElement("div");

h.className="smallHeart";

h.innerHTML=["💖","💕","🌸","💗","❤️"][Math.floor(Math.random()*5)];

h.style.left=Math.random()*100+"vw";

h.style.bottom="-30px";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},5000);

},600);


/* ===========================
      AUTO SAVE SCROLL
=========================== */

window.scrollTo(0,0);


/* ===========================
      WELCOME EFFECT
=========================== */

window.onload=function(){

heartExplosion();

createStars();

};
const sky=document.getElementById("sky");

if(sky){

for(let i=0;i<12;i++){

let cloud=document.createElement("div");

cloud.className="cloud";

cloud.style.top=(Math.random()*250)+"px";

cloud.style.left=(-300-Math.random()*300)+"px";

cloud.style.animationDuration=(25+Math.random()*20)+"s";

sky.appendChild(cloud);

}

}

/* ===========================
      TEDDY SORRY POPUP
=========================== */

function teddyPopup(){

let popup=document.createElement("div");

popup.className="teddyPopup";

popup.innerHTML=`

<div class="teddyBox">

<h2>🧸</h2>

<h3>Madam maan jao na 🥺❤️</h3>

<p>
Itna gussa accha nahi lagta 😭
<br>
Ek cute si smile de do 🌸
</p>

<button id="popupYes">
Ab Yes Kar Do ❤️
</button>

</div>

`;

document.body.appendChild(popup);


document.getElementById("popupYes").onclick=function(){

playClick();

popup.remove();

document.querySelector(".yes").click();

};

}
function smileMessage(){

let box=document.createElement("div");

box.className="smilePopup";

box.innerHTML=`

<div>

<h2>😄🧸</h2>

<h3>
Ab hass bhi do Madam ❤️
</h3>

<p>
Aapki smile sabse cute hai 🌸
</p>

<button onclick="this.parentElement.parentElement.remove()">
😁 Hassi aa gayi
</button>

</div>

`;

document.body.appendChild(box);

}
