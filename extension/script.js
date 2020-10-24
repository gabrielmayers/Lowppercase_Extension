//Wait the content been loaded:

document.addEventListener('DOMContentLoaded', function() {

    // Make it happen just when click on the Upper button:
    document.querySelector('#btnUpper').addEventListener('click', function () {
        
        // Get value from text:
        let text = document.querySelector('#text').value;

        // Using <div> to show the result:
        document.querySelector("#result").innerHTML = upper(text);
    });

    // Make it happen just when click on the Lower button:
    document.querySelector("#btnLower").addEventListener('click', function() {

        //Get value from text:
        let text = document.querySelector('#text').value;

        // Using <div> to show the result:
        document.querySelector('#result').innerHTML = lower(text)
    });

    // Function to make text Uppercase:

    function upper(text) {
        return text.toUpperCase();
    }

    // Function to make text Lowercase:
    function lower(text) {
        return text.toLowerCase();
    }
});