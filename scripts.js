document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement("button");
    let t = document.createTextNode("Add Square");
    button.append(t);
    document.body.appendChild(button);
    button.addEventListener('click', function (){
        let div = document.createElement("div");
        div.className = ("boxes")
        document.body.appendChild(div); 
        let x = div.childElementCount;
        console.log(x)
        let count = document.getElementById('count');    
    })    
});
