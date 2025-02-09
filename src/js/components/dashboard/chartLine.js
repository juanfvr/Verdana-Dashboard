const ctxLine = document.getElementById("chartLine").getContext("2d");

new Chart(ctxLine, {
    type: "line",
    data: {
        labels: [
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro'
          ],
          datasets: [{
            label: 'Economia nos ultimos 4 meses (%)',
            data: [50, 28, 15, 47, 65],
            backgroundColor: [
              '#24E024'
            ]
          }]
    },
    
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });