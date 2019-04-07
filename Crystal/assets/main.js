var startingNumber;
var wins= 0;
var losses = 0;
var currentTotal = 0;



var startOfGame = function () {


    $(".crystals").empty();    
    var images =['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJlMR8nkRlfdR3-dXhedkevd5l8MvxMQrF5W1sxm1vWr_3_4WDg', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6kgtUeqf2wsz1zE2nU4iEZKAzy_BwRaEK8PbBq1kG2OMdNYaY', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsZ2Nfu8DFlA-iQ6gGoQKsp9n85TSYduTd2Rqmbypa377_xWv', 
    'https://cdn.shopify.com/s/files/1/2398/2457/products/Amethyst800x_1024x1024.jpg?v=1530659660']
        startingNumber = Math.floor(Math.random() * 102) + 19;
    $("#startingNumber").html('Target Number: ' + startingNumber);
    $('#currentTotal').html('Current Score: ' + currentTotal);
    // console.log(startingNumber)
    // ^display random number at the start of the game between 19 - 120.

    for(var i = 0; i < 4; i++) {// four crystals

        var randomCrystalNumber = Math.floor(Math.random() * 11) + 1;
        // would Math.ceiling * 12 work? 
        // console.log(randomCrystalNumber)
    
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',// <designing the boxes/crystals css
        "data-random": randomCrystalNumber
        // with random number from 1-12 (Math.random and data-random)
    });
    crystal.css({
        "background-image":"url('" + images[i] + "')",
        "background-size":"cover",
    })
    $(".crystals").append(crystal);

    }

}

startOfGame();

$(document).on('click', ".crystal", function () {
    // user clicks on a crystal, add hidden random number of points to the player's total score. 
    // Win if total score matches the random number from the beginning of the game.
    // lose if score goes above the random number.
    
    var number = parseInt($(this).attr('data-random'));
    
    currentTotal += number;
    
    $('#currentTotal').html('Current Score: ' + currentTotal);

    console.log(currentTotal)

    if (currentTotal > startingNumber) {
        // alert('you lost');
        losses++;
        $("#losses").html('Games Lost: ' + losses);
         currentTotal = 0;
         startOfGame();
    }
    else if (currentTotal === startingNumber){
        // alert('you win');
        wins++;
        $("#wins").html('Games Won: ' + wins);
        currentTotal = 0;
        startOfGame();
    }

});

// *display random number at the start of the game between 19 - 120. 
    //  with random number from 1-12 (Math.random and data-random)
// *four crystals with random number from 1-12 (Math.random and data-random)
// *user clicks on a crystal, add hidden random number of points to the player's total score. 
// *Win if total score matches the random number from the beginning of the game.
// *lose if score goes above the random number.
// *The game restarts whenever the user wins or losses.
// *When the game begins again, the user should see a new random number. 
// *Also, all the crystals will have four new hidden values. 
// *Of course, the user's score (and score counter) will reset to zero.
// *The app should show the number of games the player wins and losses. 
// *To that end, do not refresh the page as a means to restart the game.