document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement("button");
    let t = document.createTextNode("Add Square");
    button.append(t);
    document.body.appendChild(button);
    button.addEventListener('click', function (){
        let div = document.createElement("div");
        document.body.appendChild(div);        
    })    
});
