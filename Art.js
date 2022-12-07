/**
 * Graph
 */
// code for bar chart taken from - https://www.chartjs.org/docs/latest/charts/bar.html - and edited by me
/**
 * Loads content of JS file intantly after main website is fully loaded
 * @function 
 */
window.onload = function () {
  /**
   * Allows to connect this part of JSsript code to HTML file
   * @syntax
   */
  const ctx = document.getElementById('myChart').getContext('2d')
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      // data from --> https://www.statista.com/statistics/246293/art-museums-by-total-attendance-worldwide/
      labels: ['Louvre, Paris', 'National Museum of China, Beijing', 'Shanghai Science and Technology Museum, Shanghai', 'China Science Technolody Museum, Beijing', 'Metropolitan Museum of Art, New York', 'National Gellry of Art, Washington', 'State Hermitage Museum, St.Petersburg', 'Reina Sofia, Madrit', 'Varican Museum, Vatican City', 'National History Museum, London'],
      datasets: [{
        label: 'Most Visited Art Galleries in the World in 2019 (in millions)',

        data: [9.6, 7.39, 4.82, 3.89, 6.77, 4.07, 4.96, 4.43, 6.88, 5.42],
        backgroundColor: [
          'rgba(153, 102, 255)',
          'rgba(153, 102, 255)',
          'rgba(153, 102, 255)',
          'rgba(153, 102, 255)',
          'rgba(153, 102, 255)',
          'rgba(153, 102, 255)',
          'rgba(153, 102, 255)',
          'rgba(153, 102, 255)',
          'rgba(153, 102, 255)',
          'rgba(153, 102, 255)'
        ],
        borderColor: [
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)'

        ],

        borderWidth: 1
      },
      {
        label: 'Most Visited Art Galleries in the World in 2020 (in millions)',

        data: [2.7, 1.6, 1.35, 0.69, 1.13, 0.73, 0.97, 1.25, 1.3, 1.2],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(255, 99, 132)',
          'rgba(255, 99, 132)',
          'rgba(255, 99, 132)',
          'rgba(255, 99, 132)',
          'rgba(255, 99, 132)',
          'rgba(255, 99, 132)',
          'rgba(255, 99, 132)',
          'rgba(255, 99, 132)',
          'rgba(255, 99, 132)'
        ],
        borderColor: [
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)'

        ],

        borderWidth: 1
      }, {
        label: 'Most Visited Art Galleries in the World in 2021 (in millions)',

        data: [2.83, 2.38, 2.37, 2.36, 1.96, 1.71, 1.65, 1.64, 1.61, 1.56],
        backgroundColor: [
          'rgba(255, 205, 86)',
          'rgba(255, 205, 86)',
          'rgba(255, 205, 86)',
          'rgba(255, 205, 86)',
          'rgba(255, 205, 86)',
          'rgba(255, 205, 86)',
          'rgba(255, 205, 86)',
          'rgba(255, 205, 86)',
          'rgba(255, 205, 86)',
          'rgba(255, 205, 86)'
        ],
        borderColor: [
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)',
          'rgb(153, 102, 255)'

        ],

        borderWidth: 1
      }]
    },

    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })
}
