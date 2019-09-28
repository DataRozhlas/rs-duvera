import "./byeie"; // loučíme se s IE
import Highcharts from "highcharts";

const colors = ["#1d8f64", "#ce4a08", "#6159a4", "#de0077", "#569918", "#df9c09"];

const barDuvera = (render, title, data) => (
  Highcharts.chart(render, {
    chart: {
      type: "column",
    },
    title: {
      text: title,
    },
    colors,
    xAxis: {
      title: {
        text: null,
      },
      categories: ["Zajištěná střední třída", "Nastupující kosmopolitní třída", "Tradiční pracující třída", "Třída místních vazeb", "Ohrožená třída", "Strádající třída"],
    },
    yAxis: {
      min: -50,
      max: 50,
      title: {
        text: "nedůvěra / důvěra",
      },
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      column: {
        colorByPoint: true,
        dataLabels: {
          enabled: true,
        },
        groupPadding: 0.1,
      },
    },
    credits: {
      enabled: false,
    },
    series: [{
      name: "Data",
      data,
    }],
  }));

const barStrukt = (render, title, data) => (
  Highcharts.chart(render, {
    chart: {
      type: "column",
    },
    title: {
      text: title,
    },
    colors,
    xAxis: {
      title: {
        text: null,
      },
      categories: ["Zajištěná střední třída", "Nastupující kosmopolitní třída", "Tradiční pracující třída", "Třída místních vazeb", "Ohrožená třída", "Strádající třída"],
    },
    yAxis: {
      min: 0,
      max: 50,
      title: {
        text: null,
      },
    },
    tooltip: {
      shared: true,
      valueSuffix: " %",
    },
    legend: {
      enabled: true,
    },
    plotOptions: {
      column: {
        colorByPoint: true,
        dataLabels: {
          enabled: true,
          formatter: function fmt() { return `${this.y} %`; },
        },
        groupPadding: 0.1,
      },
    },
    credits: {
      enabled: false,
    },
    series: data,
  }));

barDuvera("graf-duvera-mzl", "Mezilidská důvěra", [-1, 6, -28, -3, -17, -42]);
barDuvera("graf-duvera-inst", "Důvěra institucím", [-4, 0, -10, -2, -13, -17]);
barDuvera("graf-duvera-moc-inst", "Důvěra mocenským institucím", [18, 25, 8, 16, 7, -1]);
barDuvera("graf-duvera-pol-inst", "Důvěra politickým institucím", [-27, -24, -27, -19, -32, -31]);
barStrukt("graf-strukt", "Představy o struktuře společnosti", [
  { name: "Mezi jejími skupinami nejsou velké rozdíly a přehrady", data: [3, 5, 3, 3, 4, 3] },
  { name: "Skládá se z vyšší, střední a nižší třídy – ty mezi sebou nemají moc společného", data: [47, 44, 48, 49, 46, 39] },
  { name: "Jsou tu společenské špičky (elita) a nejnižší třída – většina lidí je mezi nimi a je si podobná", data: [40, 43, 34, 32, 34, 32] },
  { name: "Jsou tu jen dvě skupiny – obyčejní lidé a malá společenská špička na druhé straně", data: [10, 8, 15, 15, 17, 26] },
]);
barStrukt("graf-zaraz", "Kam by sami sebe zařadili", [
  { name: "Nižší třída", data: [0, 1, 8, 3, 9, 22] },
  { name: "Nižší střední třída", data: [15, 12, 38, 37, 37, 41] },
  { name: "Střední třída", data: [68, 59, 52, 56, 52, 37] },
  { name: "Vyšší sřední třída", data: [17, 27, 3, 4, 3, 0] },
  { name: "Vyšší třída", data: [0, 1, 0, 1, 0, 1] },
]);
