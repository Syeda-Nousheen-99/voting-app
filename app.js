let addBtn = document.getElementById("btn");
let nameList = document.getElementById("nameAdd");
let candidate = document.getElementById("candidates");
let candidateList = ["Sara", "Ayesha", "Rabiya"];


addBtn.addEventListener("click", () => {
    let nameInput = nameAdd.value;
    if (nameInput) {
        candidateList.push(nameInput);
        nameInput.value = "";
        console.log("candidate add", nameInput);
    } else {
        console.log("please Enter");
    }
    displayCandidates();
   
})

let displayCandidates = () => {
    candidate.innerHTML = "";
    candidateList.forEach((candidateName, index) => {
        let row = document.createElement("li");

        let indexCell = document.createElement("span");
        indexCell.textContent = index + 1;
        row.appendChild(indexCell);

        let nameCell = document.createElement("span");
        nameCell.textContent = candidateName;
        row.appendChild(nameCell);

        let voteCell = document.createElement("span");
        voteCell.textContent = 0;
        row.appendChild(voteCell).style.backgroundColor = "#fffff";
        

        row.addEventListener("click", () => {
            voteCell.textContent = parseInt(voteCell.textContent) + 1;
        });

        candidate.appendChild(row);
    });
   
};
displayCandidates();
