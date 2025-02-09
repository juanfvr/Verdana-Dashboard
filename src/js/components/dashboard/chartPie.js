const ctxPie = document.getElementById("chartPie").getContext("2d");

new Chart(ctxPie, {
    type: "pie",
    data: {
    labels: [
        "Produção/Operacional", "Escritório",
        "TI e Infraestrutura", " Segur. e Monitoramento",
        "Outros (Refeitório, Áreas Comuns)"
    ],
      datasets: [
        {
          label: "Consumo por setor", 
          data: [512, 437, 210, 72, 53],
          backgroundColor: [
            '#24E024',
            '#134E13',
            '#0B2D0B',
            '#072107',
            '#051705'
          ],
          borderWidth: 0,
        },
      ],
    },
    
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });