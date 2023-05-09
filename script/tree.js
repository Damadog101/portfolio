let treeBase = document.getElementById("treeBase");
let leftProjectBase = document.getElementById("branchLeft");
let rightProjectBase = document.getElementById("branchRight");

let leftProjects = document.querySelectorAll(".projectOdd");
let rightProjects = document.querySelectorAll(".projectEven");


window.addEventListener("resize", () => {
    let leftWidth = treeBase.style.left - leftProjectBase.clientWidth;
    let rightWidth = treeBase.clientWidth - leftProjectBase.style.left;

    
    

})