var options = {
    series: [{
    name: 'Masculino',
    data: [10, 17, 54, 67, 33, 43]
  }, {
    name: 'Feminino',
    data: [10, 20, 30, 80, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 350,
    stacked: true,
    toolbar: {
      show: true
    },
    zoom: {
      enabled: true
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  xaxis: {
    categories: ['0 aos 10', '11 aos 18', '19 aos 35', '36 aos 50', '51 aos 65', '66<'],
    title: {
 /* fontFamily: Staatliches, cursive */
    }
  },
  legend: {
    position: 'right',
    offsetY: 40
  },
  fill: {
    opacity: 1
  }
  };

  var chart = new ApexCharts(document.querySelector("#piechart"), options);
  chart.render();



    /* 1º INDICADOR */
    
    var options = {
        series: [{
        name: 'Masculino',
        data: [120, 140, 136, 121, 212, 224]
      }, {
        name: 'Feminino',
        data: [132, 156, 170, 174, 182, 234]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'flat'
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
        categories: ['2011', '2013', '2015', '2017', '2019', '2021'],
        title: {
     /* fontFamily: Staatliches, cursive */
        }
      },
      yaxis: {
        title: {
          text: '',
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return " " + val + " utentes"
          }
        }
      }
      };
    
      var chart = new ApexCharts(document.querySelector("#piechart2"), options);
      chart.render();

      /* 3º INDICADOR */

      var options = {
        series: [{
        name: 'Masculino',
        data: [654, 334, 98, 24, 89, 680]
      }, {
        name: 'Feminino',
        data: [756, 312, 56, 24, 67, 870]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'flat'
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
        categories: ['Aberta', 'Vigilância de Saúde ', 'Vigilância em Problemas de Saúde', 'Apoio Domicilário', 'Cuidados de Enfermagem', 'Sintomas Covid-19'],
        title: {
     /* fontFamily: Staatliches, cursive */
        }
      },
      yaxis: {
        title: {
          text: '',
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return " " + val + " utentes"
          }
        }
      }
      };
    
      var chart = new ApexCharts(document.querySelector("#piechart3"), options);
      chart.render();



      /* 4º INDICADOR */

      var options = {
        series: [{
        name: 'Anatomia Patológica',
        data: [123, 110]
      }, {
        name: 'Anestesiologia',
        data: [546, 321]
      }, {
        name: 'Cardiologia',
        data: [32, 332]
      }, {
        name: 'Farmacologia Clínica',
        data: [17, 456]
      }, {
        name: 'Genética Médica',
        data: [256, 123]
      }, {
        name: 'Imunoalergologia',
        data: [212, 456]
      }, {
        name: 'Johnny Sins',
        data: [69, 420]
      }, {
        name: 'Medicina Desportiva',
        data: [45, 67]
      }
      , {
        name: 'Medicina Geral e Familiar',
        data: [326, 657]
      }
      , {
        name: 'Oftalmologia',
        data: [12, 35]
      }
      , {
        name: 'Ortopedia',
        data: [89, 321]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'flat'
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
        categories: ['Masculino','Femino'],
        title: {
     /* fontFamily: Staatliches, cursive */
        }
      },
      yaxis: {
        title: {
          text: '',
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return " " + val + " utentes"
          }
        }
      },
      colors: ['#D90000','#FF8A2F','#FEDC19','#00E396','#00C3B7','#58BDFF','#7E83DC','#A700FF','#C5B3FF','#FFADCE','#FF5695']
      };
      
      var chart = new ApexCharts(document.querySelector("#piechart4"), options);
      chart.render();

      /* 5º INDICADOR */

      var options = {
        series: [{
        name: 'Casos',
        data: [528469]
      }, {
        name: 'Recuperados',
        data: [394065]
      }, {
        name: 'Mortes',
        data: [8543]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'flat'
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
        categories: ['Portugal'],
        title: {
     /* fontFamily: Staatliches, cursive */
        }
      },
      yaxis: {
        title: {
          text: '',
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return " " + val + " utentes"
          }
        }
      }
      };
    
      var chart = new ApexCharts(document.querySelector("#piechart5"), options);
      chart.render();


      /* 6º INDICADOR */

      var options = {
        series: [{
        name: 'Casos',
        data: [93819952, 23612055, 10542841, 8393492, 3483531, 3316019, 2872941]
      },{
        name: 'Recuperados',
        data: [51666159, , 10179715, 7438075, 2879082, , ]
      },{
        name: 'Mortes',
        data: [2008273, 392529, 152093, 208246, 63558, 87295, 69949]
      }],
        chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'flat'
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
        categories: ['Totais','Estados Unidos', 'India', 'Brasil', 'Russia', 'Reino Unido', 'França'],
        title: {
     /* fontFamily: Staatliches, cursive */
        }
      },
      yaxis: {
        title: {
          text: '',
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return " " + val + " utentes"
          }
        }
      }
      };
    
      var chart = new ApexCharts(document.querySelector("#piechart6"), options);
      chart.render();