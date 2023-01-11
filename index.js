/* DECLARE VARIABLES AND GRAB ELEMENTS */

let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let countHome = 0
let countGuest = 0

/* HOME TEAM SCORE BUTTTONS */

homePlusOne.addEventListener('click', function(){
    countHome += 1;
    homeScore.textContent = countHome;
})

homePlusTwo.addEventListener('click', function(){
    countHome += 2;
    homeScore.textContent = countHome;
})

homePlusThree.addEventListener('click', function(){
    countHome += 3;
    homeScore.textContent = countHome;
})

/* GUEST TEAM SCORE BUTTTONS */

guestPlusOne.addEventListener('click', function(){
    countGuest += 1;
    guestScore.textContent = countGuest;
})

guestPlusTwo.addEventListener('click', function(){
    countGuest += 2;
    guestScore.textContent = countGuest;
})


guestPlusThree.addEventListener('click', function(){
    countGuest += 3;
    guestScore.textContent = countGuest;
})


/* RESET ALL SCORE BUTTTON - SETTING TEXT CONTENT TO "0" RESETS THE ACTUAL DOM, IF YOU WERE TO RESET 'COUNTGUEST' AND/OR 'COUNTHOME' THE VALUE WOULD EFFECTIVELY BE "0" HOWEVER THE DOM WON'T CHANGE */

clearScore.addEventListener('click', function(){
    homeScore.textContent = 0;
    guestScore.textContent = 0;
})