var img = document.getElementById("singing");
var singingCounter = document.getElementById("singing-counter")
var clicked = false;
var counter = 0
img.addEventListener("mouseover", function() {
        img.src = "assets/fullheart.png";
});

img.addEventListener("click", function() {
    img.src = "assets/fullheart.png";
    clicked = !clicked
    counter ++
    singingCounter.innerHTML = counter
})

img.addEventListener("mouseout", function() { 
    if (clicked){
        img.src = "assets/fullheart.png";
    } else {
        img.src = "assets/heart.png";
    }
});

var piano = document.getElementById("piano");
var pianoCounter = document.getElementById("piano-counter")
var clicked = false;
var pianoCount = 0
piano.addEventListener("mouseover", function() {
        piano.src = "assets/fullheart.png";
});

piano.addEventListener("click", function() {
    piano.src = "assets/fullheart.png";
    clicked = !clicked
    pianoCount ++
    pianoCounter.innerHTML = pianoCount
})

piano.addEventListener("mouseout", function() { 
    if (clicked){
        piano.src = "assets/fullheart.png";
    } else {
        piano.src = "assets/heart.png";
    }
});

var zelda = document.getElementById("zelda");
var zeldaCounter = document.getElementById("zelda-counter")
var clicked = false;
var zeldaCount = 0
zelda.addEventListener("mouseover", function() {
        zelda.src = "assets/fullheart.png";
});

zelda.addEventListener("click", function() {
    zelda.src = "assets/fullheart.png";
    clicked = !clicked
    zeldaCount ++
    zeldaCounter.innerHTML = zeldaCount
})

zelda.addEventListener("mouseout", function() { 
    if (clicked){
        zelda.src = "assets/fullheart.png";
    } else {
        zelda.src = "assets/heart.png";
    }
});

var reading = document.getElementById("reading");
var readingCounter = document.getElementById("reading-counter")
var clicked = false;
var readingCount = 0
reading.addEventListener("mouseover", function() {
        reading.src = "assets/fullheart.png";
});

reading.addEventListener("click", function() {
    reading.src = "assets/fullheart.png";
    clicked = !clicked
    readingCount ++
    readingCounter.innerHTML = readingCount
})

reading.addEventListener("mouseout", function() { 
    if (clicked){
        reading.src = "assets/fullheart.png";
    } else {
        reading.src = "assets/heart.png";
    }
});

var dnd = document.getElementById("dnd");
var dndCounter = document.getElementById("dnd-counter")
var clicked = false;
var dndCount = 0
dnd.addEventListener("mouseover", function() {
        dnd.src = "assets/fullheart.png";
});

dnd.addEventListener("click", function() {
    dnd.src = "assets/fullheart.png";
    clicked = !clicked
    dndCount ++
    dndCounter.innerHTML = dndCount
})

dnd.addEventListener("mouseout", function() { 
    if (clicked){
        dnd.src = "assets/fullheart.png";
    } else {
        dnd.src = "assets/heart.png";
    }
});

var plants = document.getElementById("plants");
var plantsCounter = document.getElementById("plants-counter")
var clicked = false;
var plantsCount = 0
plants.addEventListener("mouseover", function() {
        plants.src = "assets/fullheart.png";
});

plants.addEventListener("click", function() {
    plants.src = "assets/fullheart.png";
    clicked = !clicked
    plantsCount ++
    plantsCounter.innerHTML = plantsCount
})

plants.addEventListener("mouseout", function() { 
    if (clicked){
        plants.src = "assets/fullheart.png";
    } else {
        plants.src = "assets/heart.png";
    }
});

var lotr = document.getElementById("lotr");
var lotrCounter = document.getElementById("lotr-counter")
var clicked = false;
var lotrCount = 0
lotr.addEventListener("mouseover", function() {
        lotr.src = "assets/fullheart.png";
});

lotr.addEventListener("click", function() {
    lotr.src = "assets/fullheart.png";
    clicked = !clicked
    lotrCount ++
    lotrCounter.innerHTML = lotrCount
})

lotr.addEventListener("mouseout", function() { 
    if (clicked){
        lotr.src = "assets/fullheart.png";
    } else {
        lotr.src = "assets/heart.png";
    }
});

var music = document.getElementById("music-theory");
var musicCounter = document.getElementById("music-theory-counter")
var clicked = false;
var musicCount = 0
music.addEventListener("mouseover", function() {
        music.src = "assets/fullheart.png";
});

music.addEventListener("click", function() {
    music.src = "assets/fullheart.png";
    clicked = !clicked
    musicCount ++
    musicCounter.innerHTML = musicCount
})

music.addEventListener("mouseout", function() { 
    if (clicked){
        music.src = "assets/fullheart.png";
    } else {
        music.src = "assets/heart.png";
    }
});

var nature = document.getElementById("nature");
var natureCounter = document.getElementById("nature-counter")
var clicked = false;
var natureCount = 0
nature.addEventListener("mouseover", function() {
        nature.src = "assets/fullheart.png";
});

nature.addEventListener("click", function() {
    nature.src = "assets/fullheart.png";
    clicked = !clicked
    natureCount ++
    natureCounter.innerHTML = natureCount
})

nature.addEventListener("mouseout", function() { 
    if (clicked){
        nature.src = "assets/fullheart.png";
    } else {
        nature.src = "assets/heart.png";
    }
});