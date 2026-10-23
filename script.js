
document.addEventListener("DOMContentLoaded", function () {

    // 1. SMOOTH SCROLLING
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const text = link.textContent.trim().toLowerCase();
            let target = null;

            // Use the sections already present in your HTML
            if (text === "home") {
                target = document.querySelector(".hero");
            } else if (text === "shop") {
                target = document.querySelector(".deal-container");
            } else if (text === "categories") {
                target = document.querySelector(".container");
            } else if (text === "products") {
                target = document.querySelector(".products");
            } else if (text === "deals") {
                target = document.querySelector(".deal-container");
            } else if (text === "contact") {
                target = document.querySelector(".newsletter");
            } else if (text === "details") {
                target = document.querySelector(".articles");
            } else if (text === "offers") {
                target = document.querySelector(".offers");
            }

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

            // Close the mobile menu
            const nav = document.getElementById("navLinks");
            const menu = document.querySelector(".menu-toggle");

            if (nav) {
                nav.classList.remove("active");
            }

            if (menu) {
                menu.textContent = "☰";
            }
        });
    });


    // 2. HAMBURGER MENU
    const nav = document.getElementById("navLinks");
    const menu = document.querySelector(".menu-toggle");

    // Works with your existing onclick="toggleMenu()"
    window.toggleMenu = function () {
        if (!nav) return;

        nav.classList.toggle("active");

        if (menu) {
            menu.textContent = nav.classList.contains("active")
                ? "✕"
                : "☰";
        }
    };


    // 3. PRODUCT SEARCH
    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");

    function searchProducts() {
        if (!searchInput) return;

        const searchText = searchInput.value.toLowerCase().trim();

        const products = document.querySelectorAll(
            ".product-card, .launches > div, " +
            ".offers > div, .deal-container > .deal"
        );

        products.forEach(function (product) {
            const productText = product.textContent.toLowerCase();

            product.style.display =
                productText.includes(searchText) ? "" : "none";
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", searchProducts);

        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                searchProducts();
            }
        });
    }

    if (searchButton) {
        searchButton.addEventListener("click", searchProducts);
    }


    // 4. BUY NOW BUTTONS
    const buyButtons = document.querySelectorAll(".product-card button");
    let cartCount = 0;

    buyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const card = button.closest(".product-card");

            if (!card) return;

            const name = card.querySelector("h3");
            const price = card.querySelector("p");

            cartCount++;

            alert(
                "Product: " +
                (name ? name.textContent.trim() : "Product") +
                "\nPrice: " +
                (price ? price.textContent.trim() : "Not available") +
                "\n\nAdded to cart!\nTotal selected: " + cartCount
            );
        });
    });


    // 5. NEWSLETTER VALIDATION
    const newsletter = document.querySelector(".newsletter-box");

    if (newsletter) {
        const emailInput = newsletter.querySelector('input[type="email"]');
        const subscribeButton = newsletter.querySelector("button");

        if (emailInput && subscribeButton) {
            subscribeButton.addEventListener("click", function () {
                const email = emailInput.value.trim();

                if (email === "") {
                    alert("Please enter your email address.");
                    emailInput.focus();
                    return;
                }

                if (!emailInput.checkValidity()) {
                    alert("Please enter a valid email address.");
                    emailInput.focus();
                    return;
                }

                alert("Thank you for subscribing!");
                emailInput.value = "";
            });
        }
    }


    // 6. ENABLE SMOOTH PAGE SCROLLING
    document.documentElement.style.scrollBehavior = "smooth";

});

