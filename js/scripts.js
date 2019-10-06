
$( document ).ready(function() {
  createCharts();
});

function createCharts(){
var chart = c3.generate({
   bindto: '#chart',

   data: {
     x: 'x',
      columns: [
          ['x', 2007, 2008, 2009, 2010],
          ['future of nation (%)', 73, 72, 71, 76],
          ['work (%)', 74, 68, 69, 70],
          ['personal health (%)', 55, 54, 47, 52],
          ['job stability (%)', 42, 44, 49, 52]
      ]
  }
});

  var genderChart = c3.generate({
    bindto:'#gender-chart',
    data: {
        // iris data from R
        columns: [
            ['live with stress', 6],
            ['live stress-free', 1],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});



var chart = c3.generate({
  bindto:'#age-chart',
    data: {
      x : 'x',
         columns: [
             ['x', 'sleep', 'fatigue', 'mental psychology'],
             ['impact from stress (%)', 77, 51, 73, 100],
             ['no impact (%)', 23, 49, 27],
         ],
         groups: [
             ['impacted by stress', 'no impact']
         ],
         type: 'bar'
     },
     axis: {
         x: {
             type: 'category' // this needed to load string x value
         }
     }
 });

}
