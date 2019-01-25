document.addEventListener('DOMContentLoaded', function () {
    // Create a buttton
    let button = document.createElement("button");
    let t = document.createTextNode("Add Square");
    button.append(t);
    document.body.appendChild(button);

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


        function getRandomColor() {
            let colors = ['red', 'blue', 'green', 'yellow', 'orange', 'pink', 'purple'];
            let randomIndex = Math.floor(Math.random() * colors.length);
            return colors[randomIndex];
        };
        div.addEventListener("click", function () {
            div.style.backgroundColor = getRandomColor();

        })
        // document.getElementById('number')
        // div.addEventListener("doubleclick", function removeSquare() {
        //     if ('number' % 2 > 0) {
        //         removeChild('div')}
        //     })


                // Display number on boxes
                div.addEventListener("mouseover", function () {
                    div.style.color = "white"
                    div.style.textAlign = "center";
                })
                div.addEventListener("mouseout", function () {
                    div.style.color = "black";
                    //removeChild('number')
                })



            })


    })

