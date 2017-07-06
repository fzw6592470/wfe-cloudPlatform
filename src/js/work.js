;(function($){
	var barChartData = {
		labels : ["06-17","06-18","06-19","06-20","06-21","06-22","06-23","06-24","06-25","06-26","06-27","06-28","06-29","06-30","07-01"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,0.5)",
				strokeColor : "rgba(220,220,220,1)",
				data : [65,59,90,81,56,55,40,68,80,159,125,168,70,58,99]
			},
		]
		
	};
	var pieChartData = [
		{
			value: 30,
			color:"#F38630"
		},
		{
			value : 50,
			color : "#E0E4CC"
		},
		{
			value : 100,
			color : "#69D2E7"
		}
	];
	var canvasWidth = $("#myChart").parent().width();
	var pieCanvasWidth = $("#pieChartCanvas").parent().width();
	$("#myChart").attr("width",canvasWidth);
	$("#pieChartCanvas").attr("width",pieCanvasWidth);
	var globalGraphSettings = {animation : Modernizr.canvas};
	var ctx = document.getElementById("myChart").getContext("2d");
	new Chart(ctx).Bar(barChartData,globalGraphSettings);
	var ctx = document.getElementById("pieChartCanvas").getContext("2d");
	new Chart(ctx).Pie(pieChartData,globalGraphSettings);
})(jQuery);
