function gridSize(){
    let squares = Number(prompt("how many squares?"))
    if(squares > 100) {
      console.log("Your choice can not be greater than 100.");
    } else {
      //remove divs in current container
      while (container.firstChild){
        container.removeChild(container.firstChild);
      }
      //create new divs
      for (let i = 0; i < squares * squares; i++) {
      let divs = document.createElement("div");
      divs.className = "divs";
      divs.textContent = `${[i]}`;
      container.appendChild(divs);
      }
    }
  }

  let container = document.querySelector(".container");

  let button = document.querySelector("#reset");

  button.addEventListener("click", () => {
    gridSize();
  });


  let size = 16;

  for (let i = 0; i < size * size; i++) {
    let divs = document.createElement("div");
    divs.className = "divs";
    divs.textContent = `${[i]}`;
    container.appendChild(divs);
  }
