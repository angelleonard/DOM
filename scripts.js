document.addEventListener('DOMContentLoaded', function () {
    // Create a buttton
    let button = document.createElement("button");
    let t = document.createTextNode("Add Square");
    button.append(t);
    document.body.appendChild(button);
    button.style.display = 'block';

    let number = 0;

    let container = document.createElement('div');
    document.body.appendChild(container);
    container.className = ('main');


    // Make buttton add boxes
    button.addEventListener('click', function () {
        let div = document.createElement("box");
        div.className = ("boxes")
        container.appendChild(div);

        // Add numbers to boxes
        let boxText = document.createTextNode(number);
        div.append(boxText);
        div.id = number;
        number++;
        div.style.color = "white"
        div.style.textAlign = "center";

        function getRandomColor() {
            let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'purple'];
            let randomIndex = Math.floor(Math.random() * colors.length);
            return colors[randomIndex];
        }
        div.addEventListener("click", function () {
            div.style.backgroundColor = getRandomColor();


        })


        // Display number on boxes
        div.addEventListener("mouseover", function () {
            div.appendChild(boxText);

        })

        div.addEventListener("mouseout", function () {
            div.removeChild(boxText);


        })

        // Make next square disappear if number is even


        div.addEventListener("dblclick", function (e) {
            if (e.target.nextSibling === null) {
                alert("There's no next square!");
            } else if (event.target.id % 2 === 0) {
                container.removeChild(event.target.nextSibling);


            }
            if (event.target.previousSibling === null) {
                alert("There's no square before this one!")


            } else if (event.target.id % 2 > 0) {

                container.removeChild(event.target.previousSibling);
            }

        })


    })


})















