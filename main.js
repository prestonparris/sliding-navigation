const navigationItems = {
    "cities": [
        {
            "section": "cupertino",
            "label": "Cupertino"
        },
        {
            "section": "new-york-city",
            "label": "New York City"
        },
        {
            "section": "london",
            "label": "London"
        },
        {
            "section": "amsterdam",
            "label": "Amsterdam"
        },
        {
            "section": "tokyo",
            "label": "Tokyo"
        },
        {
            "section": "hong-kong",
            "label": "Hong Kong"
        },
        {
            "section": "sydney",
            "label": "Sydney"
        }
    ]
};

const navigationEl = document.getElementsByClassName("navigation-item-group")[0];

navigationItems.cities.forEach((city) => {
    navigationEl.innerHTML += `<li><a href="#${city.section}">${city.label}</a></li>`;
});

navigationEl.innerHTML += `<li id='sliding-line'></li>`;

var currentlySelectedEl = document.querySelector(".navigation-item-group li");

currentlySelectedEl.className = "navigation-item-selected";

const slidingLine = document.getElementById("sliding-line");

const navLinks = document.querySelectorAll(".navigation-item-group li a");

navLinks.forEach((link) => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const parent = event.target.parentNode;
        currentlySelectedEl.className = "";
        currentlySelectedEl = parent;
        parent.className = "navigation-item-selected";
        resetSlidingLine(false);
    });
});

function resetSlidingLine(disableAnimation) {
    const bodyEl = document.body;

    if (disableAnimation) {
        bodyEl.classList.add("preload");
    }

    const width = currentlySelectedEl.scrollWidth;
    const left = currentlySelectedEl.offsetLeft;

    slidingLine.setAttribute("style", `width: ${width}px; left: ${left}px;`);

    if (disableAnimation) {
        setTimeout(function() {
            bodyEl.classList.remove("preload");
        });
    }
}

window.addEventListener('resize', resetSlidingLine.bind(true));

resetSlidingLine(true);
