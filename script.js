document.addEventListener("DOMContentLoaded", function() {
    var services = [
        "Regular Cleaning",
        "Deep Cleaning",
        "Move-in/Move-out Cleaning",
        "Special Event Cleaning",
        "Customized Cleaning Plans"
    ];

    var servicesList = document.getElementById("servicesList");

    services.forEach(function(service) {
        var listItem = document.createElement("li");
        listItem.textContent = service;
        servicesList.appendChild(listItem);
    });
});

