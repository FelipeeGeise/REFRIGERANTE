let list = document.querySelectorAll(".item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let contagem = list.length; //length usa-se para fazer contagem de itens.
let active = 0; //active é o primeiro item e começa em 0

next.onclick = () => {
  let activePrimeiro = document.querySelector(".active");
  activePrimeiro.classList.remove("active");

  active = active >= contagem -1 ? 0 : active +1;
  list[active].classList.add("active");
};

prev.onclick = () => {
  let activePrimeiro = document.querySelector(".active");
  activePrimeiro.classList.remove("active");

  active = active <= 0 ? contagem -1: active -1;
  list[active].classList.add("active");
};
