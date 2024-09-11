// Array of funny poems with placeholders for the name
const poems = [
    "Roses are red, \nViolets are blue, \n{name}, I found your homework, \nUnder my shoe!",
    "Twinkle twinkle, little star, \n{name}, are you really that bizarre? \nWhy so serious, let's have some fun, \nWe can laugh until the day is done!",
    "Humpty Dumpty sat on a wall, \n{name} watched him... and did nothing at all! \nBut hey, it's okay, don't feel bad, \nAt least you didn't make him sad!",
    "Hickory dickory dock, \n{name} forgot to check the clock! \nNow it's too late, oh dear, \nThe party's over, let's go have a beer!",
    "Jack and Jill went up the hill, \n{name} decided to chill, \nBut Jill slipped, and Jack took the spill, \nAnd {name} was just laughing still!",
    "Old McDonald had a farm, \n{name} thought it'd do no harm, \nTo mix the cows with the hens, \nNow the sheep are writing with pens!",
    "Little Miss Muffet sat on a tuffet, \nAlong came {name} with a gigantic trumpet! \nMiss Muffet jumped up and started to flee, \n{name} said, 'Wait, come back, it's only me!'",
    "Mary had a little lamb, \nIts fleece was white as snow, \nBut when {name} came to pet it, \nThe lamb screamed, 'Oh no!'",
    "Baa baa black sheep, have you any wool? \nYes sir, yes sir, three bags full, \nOne for {name}, who's just too cool, \nAnd two for {name}'s imaginary mule!",
    "The itsy bitsy spider went up the water spout, \nDown came {name}, scaring it all about! \n{name} said, 'Oops, didn't mean to frighten!' \nAnd the spider sighed, 'Thanks for the lighten!'",
    "Hey diddle diddle, the cat and the fiddle, \nThe cow jumped over the moon, \n{name} laughed so hard, they cried, \n'The dish ran away with the spoon!'",
    "Yankee Doodle went to town, \nRiding on a pony, \nBut when {name} joined the parade, \nEveryone started eating macaroni!"
];

// Function to get a random poem and replace {name} with the user's input
function getRandomPoem(name) {
    const randomIndex = Math.floor(Math.random() * poems.length);
    return poems[randomIndex].replace(/{name}/g, name);
}

// Handle button click event
document.getElementById("getPoemBtn").addEventListener("click", function () {
    const name = document.getElementById("nameInput").value;

    if (name === "") {
        alert("Please enter your name!");
        return;
    }

    const poem = getRandomPoem(name);
    document.getElementById("poem").innerText = poem;
});
