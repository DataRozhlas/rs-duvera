import "./byeie"; // loučíme se s IE
import Highcharts from "highcharts";

const colors = ["#1d8f64", "#ce4a08", "#6159a4", "#de0077", "#569918", "#df9c09"];
const tridy = ["Zajištěná střední třída", "Nastupující kosmopolitní třída", "Tradiční pracující třída", "Třída místních vazeb", "Ohrožená třída", "Strádající třída"];

const barDuvera = (render, title, data) => Highcharts.chart(render, {
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
    categories: tridy,
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
});

const barStrukt = (render, title, data) => Highcharts.chart(render, {
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
    categories: tridy,
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
    itemStyle: { textOverflow: undefined },
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
});

const scatterPostoje = (render) => Highcharts.chart(render, {
  chart: {
    type: "scatter",
  },
  title: {
    text: "Postoje vůči společenským skupinám",
  },
  subtitle: {
    text: "Kategorie můžete vybrat v legendě pod grafem",
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    title: {
      enabled: false,
    },
    categories: [0, "partner", "přítel", "soused", "kolega", "spoluobčan", "návštěvník země", "ani návštěvník"],
    min: 1,
    max: 7,
    lineColor: "#fff",
  },
  yAxis: {
    title: {
      enabled: false,
    },
    labels: {
      style: { textOverflow: "none" },
    },
    categories: tridy,
    tickmarkPlacement: "on",
  },
  tooltip: {
    formatter: function fmt() {
      return `${tridy[this.y]}:<br>${this.series.name} má na škále blízkosti hodnotu ${String(this.x).replace(".", ",")}.`;
    }
  },
  plotOptions: {
    scatter: {
      marker: {
        radius: 5,
      },
    },
  },
  legend: {
    itemStyle: { textOverflow: undefined },
  },
  series: [{
    name: "Cizinec ze západních zemí",
    data: [[2.54, 0], [2.12, 1], [3.58, 2], [3.54, 3], [3.50, 4], [4.04, 5]],
  }, {
    name: "Člověk jiného politického přesvědčení",
    data: [[2.87, 0], [2.67, 1], [3.31, 2], [3.28, 3], [3.33, 4], [3.88, 5]],
  }, {
    name: "Osoba jiné barvy pleti",
    data: [[3.14, 0], [2.52, 1], [4.26, 2], [4.02, 3], [3.80, 4], [4.48, 5]],
  }, {
    name: "Ukrajinec",
    data: [[3.49, 0], [3.01, 1], [4.24, 2], [3.93, 3], [4.09, 4], [4.85, 5]],
  }, {
    name: "Rom",
    data: [[4.36, 0], [3.78, 1], [5.17, 2], [4.92, 3], [4.98, 4], [5.31, 5]],
  }, {
    name: "Muslim",
    data: [[5.02, 0], [4.29, 1], [6.02, 2], [5.93, 3], [5.62, 4], [6.11, 5]],
  }, {
    name: "Závislý na drogách",
    data: [[5.95, 0], [5.66, 1], [6.51, 2], [6.29, 3], [6.15, 4], [6.51, 5]],
  }],
});

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
scatterPostoje("graf-postoje");
