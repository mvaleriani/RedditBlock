

// let promotedEls = document.getElementsByClassName("fkuxEk")

// for (let i = 0; i < promotedEls.length; i++) {
//     let currEl = promotedEls[i]
//     let parentPost = currEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
//     parentPost.setAttribute("style", "display: none");
// }

// Select the node that will be observed for mutations
let targetNode = document.getElementsByClassName("s1q3b4m-0")[0]
// document.getElementById('some-id');
// console.log("Num Posts: " + targetNode.children.length);

// Options for the observer (which mutations to observe)
let config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
let callback = function (mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type == 'childList') {
            console.log('A child node has been added or removed.');
            let arr = [];
            let promotedEls = document.getElementsByClassName("ngb5qd-0");
            let otherProm = document.getElementsByClassName("fkuxEk");

            for (let j = 0; j < promotedEls.length; j++) {
                arr.push(promotedEls[j]);
            }
            for (let k = 0; k < otherProm.length; k++) {
                arr.push(otherProm[k]);
            }
            console.log(arr);
            
            // debugger;
            // console.log(promotedEls);
            
            for (let i = 0; i < arr.length; i++) {
                let currEl = arr[i]
                let parentPost = currEl.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
                parentPost.remove();
                // setAttribute("style", "display: none");
            }
        }
    }
};

// Create an observer instance linked to the callback function
let observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
// observer.disconnect();


