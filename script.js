document.addEventListener("DOMContentLoaded", () => {
    const bgText = document.querySelector(".background-text");

    window.addEventListener("scroll", () => {
        let scrollValue = window.scrollY;
        bgText.style.transform = `translate(-50%, ${scrollValue * 0.3}px)`;

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
                datasets: [{
                    label: 'Screen Time',
                    data: [1.5, 2.2, 1.8, 2.5, 2.0, 2.7],
                    borderColor: '#FF6F61',
                    borderWidth: 3,
                    fill: false     }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: { display: true },
                        y: { display: true }
                    }
                }
                
    });
});
});
document.getElementById("nextPage").addEventListener("click", function () {
    window.location.href = "next-page.html";
});

document.getElementById("prevPage").addEventListener("click", function () {
    window.location.href = "index.html"; // Replace with your actual page
});

document.querySelectorAll(".startFocusBtn").forEach(button => {
    button.addEventListener("click", function () {
        window.location.href = "dashboard.html";
    });
});


function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
