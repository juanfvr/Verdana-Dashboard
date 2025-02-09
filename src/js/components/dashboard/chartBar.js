const ctx = document.getElementById("chartBar").getContext("2d");
  
new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 29, 30, 31
    ],
    datasets: [
      {
        labels: 30,
        label: "Consumo mensal",
        data: [32000, 45000, 38000, 52000, 61000, 29000, 43000, 47000, 68000, 25000,
            72000, 39000, 41000, 53000, 28000, 37000, 86000, 40000, 69000, 57000,
            31000, 42000, 48000, 59000, 26000, 71000, 33000, 44000, 56000, 34000, 
            50000],
        borderWidth: 1,
        backgroundColor: [
            '#24E024'
          ],
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