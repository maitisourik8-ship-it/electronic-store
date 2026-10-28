
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

document.addEventListener("DOMContentLoaded", function () {

    const products = document.querySelectorAll(".product-card");
    const cartCount = document.getElementById("cart-count");

    let cart = [];

    products.forEach(function (product) {

        const productName = product.querySelector("h3").textContent;
        const productPrice = product.querySelector("p").textContent;
        const buttons = product.querySelectorAll("button");

        // BUY NOW button
        buttons[0].addEventListener("click", function () {
            alert(
                "Product: " + productName +
                "\nPrice: " + productPrice
            );
        });

        // ADD TO CART button
        buttons[1].addEventListener("click", function () {

            cart.push({
                name: productName,
                price: productPrice
            });

            // Update cart count in navbar
            cartCount.textContent = cart.length;

            alert(productName + " added to cart!");
        });

    });

});

document.addEventListener("DOMContentLoaded", function () {

    // Find the Login link in your navbar
    const loginLink = [...document.querySelectorAll("a")]
        .find(link => link.textContent.trim().toLowerCase() === "login");

    if (!loginLink) return;

    // Create the login/signup popup using JavaScript
    const popup = document.createElement("div");

    popup.id = "auth-popup";

    Object.assign(popup.style, {
        display: "none",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "9999"
    });

    popup.innerHTML = `
        <div style="
            background:white;
            padding:25px;
            width:320px;
            max-width:85%;
            border-radius:10px;
            position:relative;
            text-align:center;
            font-family:Arial,sans-serif;
        ">
            <button id="auth-close" style="
                position:absolute;
                top:8px;
                right:10px;
                border:none;
                background:none;
                font-size:24px;
                cursor:pointer;
            ">&times;</button>

            <h2 id="auth-title" style="color:#1689d5">
                Login
            </h2>

            <form id="auth-form">
                <input id="auth-name" type="text"
                    placeholder="Your name"
                    style="display:none;width:95%;padding:10px;margin:8px 0;box-sizing:border-box;">

                <input id="auth-email" type="email"
                    placeholder="Email address"
                    required
                    style="width:95%;padding:10px;margin:8px 0;box-sizing:border-box;">

                <input id="auth-password" type="password"
                    placeholder="Password (min. 6 characters)"
                    minlength="6"
                    required
                    style="width:95%;padding:10px;margin:8px 0;box-sizing:border-box;">

                <button type="submit" id="auth-submit" style="
                    width:100%;
                    padding:10px;
                    margin-top:10px;
                    border:none;
                    background:#1689d5;
                    color:white;
                    cursor:pointer;
                ">Login</button>
            </form>

            <p id="auth-message" style="font-size:14px"></p>

            <p>
                <span id="auth-switch-text">Don't have an account?</span>
                <a href="#" id="auth-switch" style="color:#1689d5">
                    Sign Up
                </a>
            </p>
        </div>
    `;

    document.body.appendChild(popup);

    const form = document.getElementById("auth-form");
    const title = document.getElementById("auth-title");
    const nameInput = document.getElementById("auth-name");
    const emailInput = document.getElementById("auth-email");
    const passwordInput = document.getElementById("auth-password");
    const submitButton = document.getElementById("auth-submit");
    const switchLink = document.getElementById("auth-switch");
    const switchText = document.getElementById("auth-switch-text");
    const message = document.getElementById("auth-message");

    let isSignup = false;

    // Open popup
    loginLink.addEventListener("click", function (event) {
        event.preventDefault();
        popup.style.display = "flex";
        showLogin();
    });

    // Close popup
    document.getElementById("auth-close").addEventListener("click", closePopup);

    popup.addEventListener("click", function (event) {
        if (event.target === popup) closePopup();
    });

    function closePopup() {
        popup.style.display = "none";
        form.reset();
        message.textContent = "";
    }

    // Login form
    function showLogin() {
        isSignup = false;
        title.textContent = "Login";
        submitButton.textContent = "Login";
        nameInput.style.display = "none";
        nameInput.required = false;
        switchText.textContent = "Don't have an account?";
        switchLink.textContent = "Sign Up";
        message.textContent = "";
        passwordInput.minLength = 6;
    }

    // Sign Up form
    function showSignup() {
        isSignup = true;
        title.textContent = "Create Account";
        submitButton.textContent = "Sign Up";
        nameInput.style.display = "block";
        nameInput.required = true;
        switchText.textContent = "Already have an account?";
        switchLink.textContent = "Login";
        message.textContent = "";
    }

    // Switch between Login and Sign Up
    switchLink.addEventListener("click", function (event) {
        event.preventDefault();

        if (isSignup) {
            showLogin();
        } else {
            showSignup();
        }
    });

    // Basic form validation/demo
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        if (isSignup) {
            message.style.color = "green";
            message.textContent =
                "Sign Up form validated successfully!";
        } else {
            message.style.color = "green";
            message.textContent =
                "Login form validated successfully!";
        }
    });

});

document.addEventListener("DOMContentLoaded", function () {

    // Get the navbar cart counter
    const cartCount = document.getElementById("cart-count");

    // Keep one shared cart count
    let count = Number(cartCount?.textContent) || 0;

    // Function to add an item to the cart
    function addToCart(productName) {
        count++;

        if (cartCount) {
            cartCount.textContent = count;
        }

        alert(productName + " added to cart!");
    }

    // DEALS OF THE DAY
    const deals = document.querySelectorAll(".deal");

    deals.forEach(function (deal) {

        const title = deal.querySelector("h4");
        const buttons = deal.querySelectorAll("button");

        // Normal deal cards
        if (title && buttons.length >= 2) {

            const productName = title.textContent.trim();

            // BUY NOW button
            buttons[0].addEventListener("click", function () {
                alert("You selected: " + productName);
            });

            // ADD TO CART button
            buttons[1].addEventListener("click", function () {
                addToCart(productName);
            });
        }

        // Discount card's SHOP NOW button
        if (deal.classList.contains("discount")) {
            const shopButton = deal.querySelector("button");

            if (shopButton) {
                shopButton.addEventListener("click", function () {
                    const productsSection =
                        document.querySelector(".products");

                    if (productsSection) {
                        productsSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    } else {
                        alert("Explore our special 30% OFF deals!");
                    }
                });
            }
        }
    });

    // BEST SELLING PRODUCTS
    const products = document.querySelectorAll(".product-card");

    products.forEach(function (product) {

        const title = product.querySelector("h3");
        const price = product.querySelector("p");
        const buttons = product.querySelectorAll("button");

        if (!title || !price || buttons.length < 2) return;

        const productName = title.textContent.trim();
        const productPrice = price.textContent.trim();

        // BUY NOW button
        buttons[0].addEventListener("click", function () {
            alert(
                "Product: " + productName +
                "\nPrice: " + productPrice
            );
        });

        // ADD TO CART button
        buttons[1].addEventListener("click", function () {
            addToCart(productName);
        });
    });

});

    // LATEST LAUNCHES SECTION
    const launches = document.querySelectorAll(".launches > div");
    const cartCount = document.getElementById("cart-count");

    launches.forEach(function (product) {

        const name = product.querySelector("h4").textContent.trim();
        const price = product.querySelector("pre").textContent.trim();
        const buttons = product.querySelectorAll("button");

        // BUY NOW button
        buttons[0].addEventListener("click", function () {
            alert(
                "Product: " + name +
                "\nPrice: " + price
            );
        });

        // ADD TO CART button
        buttons[1].addEventListener("click", function () {

            if (cartCount) {
                let count = Number(cartCount.textContent) || 0;
                count++;
                cartCount.textContent = count;
            }

            alert(name + " added to cart!");
        });

    });
    
    // SHARED CART FUNCTION
    let cartcount = document.getElementById("cart-count");
    let count = Number(cartCount?.textContent) || 0;

    function addToCart(productName) {
        count++;

        if (cartCount) {
            cartCount.textContent = count;
        }

        alert(productName + " added to cart!");
    }

    // TRENDING OFFERS SECTION
    const offers = document.querySelectorAll(".offers > div");

    offers.forEach(function (product) {

        const name = product.querySelector("h4")?.textContent.trim();
        const offer = product.querySelector("p")?.textContent.trim();
        const buttons = product.querySelectorAll("button");

        // BUY NOW
        if (buttons[0]) {
            buttons[0].addEventListener("click", function () {
                alert(
                    "Product: " + name +
                    "\nOffer: " + offer
                );
            });
        }

        // ADD TO CART
        if (buttons[1]) {
            buttons[1].addEventListener("click", function () {
                addToCart(name);
            });
        }

    });




