
/*
setInterval(replace, 3000);

function replace() {
    let stylesheet = document.styleSheets[0];
    stylesheet.insertRule();
    stylesheet.deleteRule()
    let slider = document.getElementById("slider");
    slider.innerText = "";
    let h1 = document.createElement("h1");
    h1.setAttribute("class", "moving");
    h1.textContent = "Number 2";

    let nam = document.getElementsByClassName("moving");
    nam[0].style.color = "blue";

    slider.appendChild(h1);
}
*/


particlesJS("animation", {
    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": false
            }
        },
        "color": {
            "value": "#000000" /* color of the ring (inside)  */
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 5,
                "color": "#ff8ea8" /* color of the ring (border) */
            }
        },
        "opacity": {
            "value": 1,
            "random": false
        },
        "size": {
            "value": 7,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 200,
            "color": "#c0318d", /*color of the connections between the dots*/
            "opacity": 0.5,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "out_mode": "bounce",
            "bounce": true
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": false
            },
            "resize": false
        }
    }
});