document.addEventListener('DOMContentLoaded', function() {
    generate()
}, false);
function generate(){
    const section = document.querySelector("section")
    var images = [
        {
            name: "ambulanz",
            src: "./images/ambulanz.png"
        },
        {
            name: "bus",
            src: "./images/bus.png"
        },
        {
            name: "cabriolet",
            src: "./images/cabriolet.png"
        },
        {
            name: "flugzeug",
            src: "./images/flugzeug.png"
        },
        {
            name: "flugzeug (1)",
            src: "./images/flugzeug (1).png"
        },
        {
            name: "kastenwagen",
            src: "./images/kastenwagen.png"
        },
        {
            name: "versand",
            src: "./images/versand.png"
        },
        {
            name: "wohnmobil",
            src: "./images/wohnmobil.png"
        },
        {
            name: "ambulanz",
            src: "./images/ambulanz.png"
        },
        {
            name: "bus",
            src: "./images/bus.png"
        },
        {
            name: "cabriolet",
            src: "./images/cabriolet.png"
        },
        {
            name: "flugzeug",
            src: "./images/flugzeug.png"
        },
        {
            name: "flugzeug (1)",
            src: "./images/flugzeug (1).png"
        },
        {
            name: "kastenwagen",
            src: "./images/kastenwagen.png"
        },
        {
            name: "versand",
            src: "./images/versand.png"
        },
        {
            name: "wohnmobil",
            src: "./images/wohnmobil.png"
        }
    ];
    var openedImages = [];
    images.sort(() => Math.random() - 0.5);
    images.forEach((item) => {

        var newDiv = document.createElement('div');
        var newImg = document.createElement('img');
        var newDiv1 = document.createElement('div');

        newDiv.classList = 'card';
        newImg.classList = 'face';
        newDiv1.classList = 'back';

        newImg.src = item.src;
        //newImg.textContent = numbers[i];

        section.appendChild(newDiv);
        newDiv.appendChild(newImg);
        newDiv.appendChild(newDiv1);
        
        newDiv.addEventListener("click", () => {
            newImg.classList.toggle("toggleCard");
            newDiv.classList.toggle("toggleCard");
            openedImages.push(newImg);
            console.log(openedImages);
          });
    });
}

function check(){
    
}



