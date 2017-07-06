
var BasicModel = {
	toos: {
		add: $("#cui_table_add"),
		del: $("#cui_table_delete"),
		update: $("#cui_table_update")
	},
	init: function(){
		var _that =this;
		$(".cui-alert-close").click(function(){
			_that.hideAlertBox($(this));
		});
		$(".cui-alert-cancel").click(function(){
			_that.hideAlertBox($(this));
		});
		$(".cui-alert-sure").click(function(){
			_that.hideAlertBox($(this));
		});
		
		_that.toos.add.click(function(){
			$(this).parents("body").find(".cui-data-frame").show();
		})
	},
	hideAlertBox: function(obj){
		obj.parents(".cui-alert").hide();
	}
}

$(function(){
	BasicModel.init();
});