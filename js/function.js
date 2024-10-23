// search button click loading spinner1
document.getElementById("loadingButton").addEventListener("click", function () {
    var button = this;
    var spinner = document.getElementById("spinner");

    // Show the spinner and disable the button
    spinner.classList.remove("hidden");
    button.disabled = true;

    // Simulate an action (e.g., submitting a form)
    setTimeout(function () {
        // Hide the spinner and re-enable the button after 3 seconds
        spinner.classList.add("hidden");
        button.disabled = false;
    }, 2000);
});


// button2
document.getElementById("loadingButton2").addEventListener("click", function () {
    var button = this;
    var spinner = document.getElementById("spinner2");

    // Show the spinner and disable the button
    spinner.classList.remove("hidden");
    button.disabled = true;

    // Simulate an action (e.g., submitting a form)
    setTimeout(function () {
        // Hide the spinner and re-enable the button after 3 seconds
        spinner.classList.add("hidden");
        button.disabled = false;
    }, 2000);
});

// button3
document.getElementById("loadingButton3").addEventListener("click", function () {
    var button = this;
    var spinner = document.getElementById("spinner3");

    // Show the spinner and disable the button
    spinner.classList.remove("hidden");
    button.disabled = true;

    // Simulate an action (e.g., submitting a form)
    setTimeout(function () {
        // Hide the spinner and re-enable the button after 3 seconds
        spinner.classList.add("hidden");
        button.disabled = false;
    }, 1000);
});


// button4
document.getElementById("loadingButton4").addEventListener("click", function () {
    var button = this;
    var spinner = document.getElementById("spinner4");

    // Show the spinner and disable the button
    spinner.classList.remove("hidden");
    button.disabled = true;

    // Simulate an action (e.g., submitting a form)
    setTimeout(function () {
        // Hide the spinner and re-enable the button after 3 seconds
        spinner.classList.add("hidden");
        button.disabled = false;
    }, 1000);
});


// button6
document.getElementById("loadingButton6").addEventListener("click", function () {
    var button = this;
    var spinner = document.getElementById("spinner6");

    // Show the spinner and disable the button
    spinner.classList.remove("hidden");
    button.disabled = true;

    // Simulate an action (e.g., submitting a form)
    setTimeout(function () {
        // Hide the spinner and re-enable the button after 3 seconds
        spinner.classList.add("hidden");
        button.disabled = false;
    }, 2000);
});