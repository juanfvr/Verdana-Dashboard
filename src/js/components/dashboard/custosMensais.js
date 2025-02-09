const energiaMensal = document.querySelector("#energiaMensal")
const tarifa = document.querySelector("#custosInput");
const button = document.querySelector("#btn-calcular");
const total = document.querySelector("#custos-totais");

button.addEventListener("click", (event) => {
    event.preventDefault();

    const custosTotais = Number(energiaMensal.textContent) * tarifa.value;
    total.innerHTML = `Total: R$${custosTotais}`

})
