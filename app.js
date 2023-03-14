const container = document.getElementById("container");

const btn = document.getElementById("btn")



function add() {
    const box = document.createElement("div");
    box.style.maxWidth = "200px";
    box.style.width = "100%";
    box.style.height = "200px";
    box.style.backgroundColor = "red";
    box.style.border = "1px solid black";
    box.style.boxShadow = "2px 2px 1px blue"
    container.appendChild(box)
}

btn.addEventListener("click", add)
