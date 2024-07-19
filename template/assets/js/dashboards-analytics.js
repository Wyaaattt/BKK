/**
 * Dashboard Analytics
 */

'use strict';

(function () {
  let cardColor, headingColor, axisColor, shadeColor, borderColor;

  cardColor = config.colors.white;
  headingColor = config.colors.headingColor;
  axisColor = config.colors.axisColor;
  borderColor = config.colors.borderColor;

  // Pelamar Jurusan Terbanyak - Line Chart
  // --------------------------------------------------------------------
  var options = {
    series: [{
      name: "PM",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  },  {
    name: 'RPL',
    data: [23,32,43,24,54,34,6,4,2]
  }, {
    name: 'AKL',
    data: [34,21,43,53,23,12,43,23]
  }
],
    chart: {
    height: 165,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    // text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();









  //  Pekerjaan Terbanyak - Pie Chart
  // --------------------------------------------------------------------
  var options = {
    series: [44, 55, 13],
    chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Front End Developer', 'Back End Developer', 'Dev Ops'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200,
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();



  // Total Loker Terbanyak - Bar Chart
  // --------------------------------------------------------------------

  var options = {
    series: [{
    name  : 'Lowongan Pekerjaan',
    data: [44, 55, 57, 56, 61, 58, 64, 34, 34, 23, 54]
  },
  ],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','Septmber','November','Desember'],
  },
  yaxis: {
    title: {
      text: 'Jumlah'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return " " + val + " "
      }
    }
  }
  };

  const chart1 = new ApexCharts(document.querySelector("#chart1"), options);
  chart1.render();
})();
