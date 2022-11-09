//Fetch json file to read menu
fetch('foods.json').then(response => {
    return response.json();
}).then(data => {
    let buttonRandom = document.getElementById('random');
    let randomFoods = function() {
        var foodIndex = Math.floor(Math.random() * data.length);
        document.getElementById('food').innerHTML = "กิน" + "<span style='color:orange'>" + data[foodIndex].name + "</span>" +"มั้ย?"
    }

    let buttonMenu = document.getElementById('allMenu');
    //Set the mode = 0 for not add data more when click button again
    let mode = 0;
    let getMenu = function() {
        if (mode == 0) {
            for (var food of data) {
                document.getElementById('showMenu').innerHTML += "<li>"+ food.name +"</br></li>"
            }
        } 
        mode++;
    }
    //Pop-up to show all menu
    var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("allMenu");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
    
    //event when clicked on button
    buttonMenu.addEventListener('click', getMenu);
    buttonRandom.addEventListener('click', randomFoods);
});