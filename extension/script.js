//Wait the content been loaded:

document.addEventListener('DOMContentLoaded', function() {

    // Make it happen just when click on the button:
    document.querySelector('#btn').addEventListener('click', function () {
        
        // Get value from text:
        let text = document.querySelector('#text').value;

        // Using <div> to show the result:
        document.querySelector("#result").innerHTML = upper(text);
    });

    // Function to make text Uppercase:

    function upper(text) {
        return text.toUpperCase();
    }
});