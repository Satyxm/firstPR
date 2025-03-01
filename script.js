document.addEventListener("DOMContentLoaded", () => {
    fetch("contributors.json")
        .then(response => response.json())
        .then(data => {
            if (data.contributors.length > 0) {
                let latestContributor = data.contributors[data.contributors.length - 1];
                let nameElement = document.getElementById("contributor-name");
                
                nameElement.style.opacity = 0;
                setTimeout(() => {
                    nameElement.textContent = latestContributor.name;
                    nameElement.style.opacity = 1;
                }, 500);
            }
        })
        .catch(error => console.error("Error fetching contributors:", error));
});
