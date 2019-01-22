document.addEventListener('DOMContentLoaded', function () {
    // Create a buttton
    let button = document.createElement("button");
    let t = document.createTextNode("Add Square");
    button.append(t);
    document.body.appendChild(button);

    // Make buttton add boxes
    button.addEventListener('click', function () {
        let div = document.createElement("div");
        div.className = ("boxes")
        document.body.appendChild(div);

        // Count the boxes
        let x = div.childElementCount;
        console.log(x)
        let count = document.getElementById('count');
    
        // Display number on boxes
    div.addEventListener("mouseover", function () {
        let number = document.createTextNode("1");
        div.append(number);
        number.className = ("number")
     })
    })

})
