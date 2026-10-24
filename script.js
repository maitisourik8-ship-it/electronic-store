document.addEventListener("DOMContentLoaded", function () {

    // 1. NAVBAR HAMBURGER MENU
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.getElementById("navLinks");

    window.toggleMenu = function () {
        if (!navLinks) return;

        navLinks.classList.toggle("active");

        if (menuToggle) {
            menuToggle.textContent =
                navLinks.classList.contains("active") ? "✕" : "☰";
        }
    };

    if (navLinks) {
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();

                const name = link.textContent.trim().toLowerCase();
                let target = null;

                if (name === "home") {
                    target = document.querySelector(".hero");
                } else if (name === "shop" || name === "deals") {
                    target = document.querySelector(".deal-container");
                } else if (name === "categories") {
                    target = document.querySelector(".container");
                } else if (name === "products") {
                    target = document.querySelector(".products");
                } else if (name === "contact") {
                    target = document.querySelector(".newsletter");
                } else if (name === "details") {
                    target = document.querySelector(".articles");
                } else if (name === "offers") {
                    target = document.querySelector(".offers");
                }

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }

                navLinks.classList.remove("active");

                if (menuToggle) {
                    menuToggle.textContent = "☰";
                }
            });
        });
    }

    // 2. SMOOTH PAGE SCROLLING
    document.documentElement.style.scrollBehavior = "smooth";

    // 3. SEARCH PRODUCTS
    const searchInput = document.querySelector(".search-box input");
    const searchButton = document.querySelector(".search-box button");

    function searchProducts() {
        if (!searchInput) return;

        const searchText = searchInput.value.toLowerCase().trim();
        const products = document.querySelectorAll(
            ".product-card, .launches > div, .offers > div, .deal-container > .deal"
        );

        products.forEach(function (product) {
            const text = product.textContent.toLowerCase();
            product.style.display = text.includes(searchText) ? "" : "none";
        });

        if (searchText !== "") {
            const productSection = document.querySelector(".products");
            if (productSection) {
                productSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    }

    if (searchButton) {
        searchButton.addEventListener("click", searchProducts);
    }

    if (searchInput) {
        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                searchProducts();
            }
        });
    }

    // 4. HERO SHOP NOW BUTTON
    const heroButton = document.querySelector(".hero-text button");

    if (heroButton) {
        heroButton.addEventListener("click", function () {
            const deals = document.querySelector(".deal-container");

            if (deals) {
                deals.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    }

    // 5. DEAL CARD BEHAVIOR
    const deals = document.querySelectorAll(".deal");

    deals.forEach(function (deal) {
        deal.style.cursor = "pointer";

        deal.addEventListener("click", function () {
            const title = deal.querySelector("h4");

            if (title) {
                alert("You selected: " + title.textContent.trim());
            }
        });
    });

    const shopButton = document.querySelector(".deal.discount button");

    if (shopButton) {
        shopButton.addEventListener("click", function (event) {
            event.stopPropagation();
            alert("Welcome to our special 30% OFF deals!");
        });
    }

    const dealImages = document.querySelectorAll(".deal img");

    dealImages.forEach(function (image) {
        image.style.cursor = "pointer";

        image.addEventListener("click", function (event) {
            event.stopPropagation();

            const currentScale = image.style.transform || "scale(1)";
            const nextScale = currentScale === "scale(1.15)" ? "scale(1)" : "scale(1.15)";

            image.style.transform = nextScale;
            image.style.transition = "transform 0.3s ease";
        });
    });

    // 6. PRODUCT CARD BEHAVIOR
    const products = document.querySelectorAll(".product-card");
    const cart = [];

    products.forEach(function (product) {
        const title = product.querySelector("h3");
        const price = product.querySelector("p");
        const buttons = product.querySelectorAll("button");

        if (!title || !price || buttons.length < 2) {
            return;
        }

        const productName = title.textContent.trim();
        const productPrice = price.textContent.trim();

        buttons[0].addEventListener("click", function () {
            alert("You selected: " + productName + "\nPrice: " + productPrice);
        });

        buttons[1].addEventListener("click", function () {
            cart.push({
                name: productName,
                price: productPrice
            });

            alert(productName + " added to your cart!");

            console.log("Your Cart:", cart);
            console.log("Total Products:", cart.length);
        });
    });

});
