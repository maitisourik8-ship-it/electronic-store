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

    // Close menu after clicking a navigation link
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
            ".product-card, .launches > div, " +
            ".offers > div, .deal-container > .deal"
        );

        products.forEach(function (product) {
            const text = product.textContent.toLowerCase();

            product.style.display =
                text.includes(searchText) ? "" : "none";
        });

        // Scroll to the product section after searching
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

});

document.addEventListener("DOMContentLoaded", function () {

    // 1. Select all deal cards
    const deals = document.querySelectorAll(".deal");

    // 2. Add click effect to each deal card
    deals.forEach(function (deal) {
        deal.style.cursor = "pointer";

        deal.addEventListener("click", function () {
            const title = deal.querySelector("h4");

            if (title) {
                alert("You selected: " + title.textContent);
            }
        });
    });

    // 3. Shop Now button for the discount card
    const shopButton = document.querySelector(".deal.discount button");

    if (shopButton) {
        shopButton.addEventListener("click", function (event) {
            event.stopPropagation();
            alert("Welcome to our special 30% OFF deals!");
        });
    }

    // 4. Image zoom effect when clicking an image
    const images = document.querySelectorAll(".deal img");

    images.forEach(function (image) {
        image.style.cursor = "pointer";

        image.addEventListener("click", function (event) {
            event.stopPropagation();

            image.style.transform =
                image.style.transform === "scale(1.15)"
                    ? "scale(1)"
                    : "scale(1.15)";

            image.style.transition = "transform 0.3s ease";
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {

    // 1. Select all product cards
    const products = document.querySelectorAll(".product-card");

    // 2. Create a cart to store added products
    let cart = [];

    // 3. Add functionality to each product
    products.forEach(function (product) {

        const productName = product.querySelector("h3").textContent;
        const productPrice = product.querySelector("p").textContent;
        const buttons = product.querySelectorAll("button");

        // BUY NOW button
        buttons[0].addEventListener("click", function () {
            alert(
                "You selected: " + productName +
                "\nPrice: " + productPrice
            );
        });

        // ADD TO CART button
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



