document.addEventListener("load", e => {console.log("Scrolling")});
let promotedEls = document.getElementsByClassName("fkuxEk")

for (let i = 0; i < promotedEls.length; i++) {
    let currEl = promotedEls[i]
    let parentPost = currEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    parentPost.setAttribute("style", "display: none");
}

