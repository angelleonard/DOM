document.addEventListener('DOMContentLoaded', function () {
    // Create a buttton
    let button = document.createElement("button");
    let t = document.createTextNode("Add Square");
    button.append(t);
    document.body.appendChild(button);
    button.style.display = 'block';
    let number = 0;

    // Make buttton add boxes
    button.addEventListener('click', function () {
        let div = document.createElement("box");
        div.className = ("boxes")
        document.body.appendChild(div);
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
        };
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

        // Desperately try to make next square disappear if number is even, but fail repeatedly
        let x = document.getElementById('number')
        div.addEventListener("doubleclick", function () {
            if (x % 2) {
                x.nextSibling.remove               
            } else {
                alert("No square after this one");
            }
        })
    })
})


