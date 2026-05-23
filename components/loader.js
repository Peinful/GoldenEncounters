document.addEventListener("DOMContentLoaded", () => {
    // Inject global Navbar
    const navbarTarget = document.getElementById("global-navbar");
    if (navbarTarget) {
        fetch("components/navbar.html")
            .then(response => response.text())
            .then(data => {
                navbarTarget.innerHTML = data;
                highlightActiveLink();
                setupMobileMenu(); // Initialize mobile toggle after loading
            });
    }

    // Inject global Footer
    const footerTarget = document.getElementById("global-footer");
    if (footerTarget) {
        fetch("components/footer.html")
            .then(response => response.text())
            .then(data => {
                footerTarget.innerHTML = data;
            });
    }
});

function setupMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("nav-links");
    
    if (btn && menu) {
        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            menu.classList.toggle("flex");
        });
    }
}

function highlightActiveLink() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll("#nav-links a");
    
    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPath) {
            if (!link.classList.contains('group')) {
                link.className = "text-amber-500 border-b-2 border-amber-500 font-medium text-sm transition-all pb-1";
            }
        }
    });
}