/*
 *  定义菜单，实际上要从数据库中读取
 */
var GlobalMenu = {
	"work": {
		"title": "我的工作",
		"url": "work.html",
		"child": null
	},
	"web": {
		"title": "平台工作",
		"url": "",
		"child": [
			{
				"title": "系统设置",
				"url": "",
				"child": [
					{
						"title": "钱包充值设置",
						"url": "walletSet.html",
					},
					{
						"title": "第三方支付设置",
						"url": "thirdPaySet.html",
					},
					{
						"title": "系统参数",
						"url": "systemParameter.html",
					}
				]
			},
			{
				"title": "组织结构",
				"url": "",
				"child": [
					{
						"title": "部门管理",
						"url": "departmentManage.html",
					},
					{
						"title": "角色管理",
						"url": "characterManage.html",
					},
					{
						"title": "用户管理",
						"url": "usersManage.html",
					}
				]
			}
		]
	},
	"companyManage": {
		"title": "企业管理",
		"url": "",
		"child": [
			{
				"title": "企业管理",
				"url": "",
				"child": [
					{
						"title": "企业信息管理",
						"url": "companyInfoManage.html",
					},
					{
						"title": "企业登录账户设置",
						"url": "companyLoginAccountManage.html",
					}
				]
			}
		]
	},
	"parkManage": {
		"title": "停车场管理",
		"url": "",
		"child": [
			{
				"title": "路外车场",
				"url": "",
				"child": [
					{
						"title": "基本信息维护",
						"url": "baseInfoMaintain.html",
					},
					{
						"title": "车场接入设置",
						"url": "parkingAccessSet.html",
					},
					{
						"title": "账务信息维护",
						"url": "accountInfoMaintain.html",
					},
					{
						"title": "车场运行状态",
						"url": "parkRunningStatus.html",
					}
				]
			},
			{
				"title": "路内车场",
				"url": "",
				"child": [
					{
						"title": "基本信息维护",
						"url": "baseInfoMaintain.html",
					},
					{
						"title": "车场接入设置",
						"url": "parkingAccessSet.html",
					},
					{
						"title": "账务信息维护",
						"url": "accountInfoMaintain.html",
					},
					{
						"title": "车场运行状态",
						"url": "parkRunningStatus.html",
					}
				]
			}
		]
	},
	"memberManage": {
		"title": "会员管理",
		"url": "",
		"child": [
			{
				"title": "会员管理",
				"url": "",
				"child": [
					{
						"title": "发行方管理",
						"url": "issuerManage.html",
					},
					{
						"title": "标签车主",
						"url": "tagOwner.html",
					},
					{
						"title": "会员信息",
						"url": "memberInfo.html",
					},
					{
						"title": "名单维护",
						"url": "listMaintain.html",
					}
				]
			}
		]
	},
	"standardManage": {
		"title": "标准管理",
		"url": "",
		"child": [
			{
				"title": "标准管理",
				"url": "",
				"child": [
					{
						"title": "系统字典",
						"url": "systemDictionary.html",
					},
					{
						"title": "区域维护",
						"url": "regionalMaintain.html",
					},
					{
						"title": "佣金策略",
						"url": "commissionStrategy.html",
					}
				]
			}
		]
	},
	"log": {
		"title": "日志",
		"url": "",
		"child": [
			{
				"title": "日志",
				"url": "",
				"child": [
					{
						"title": "登录日志",
						"url": "loginLog.html",
					},
					{
						"title": "操作日志",
						"url": "operatingLog.html",
					},
					{
						"title": "异常日志",
						"url": "exceptionLog.html",
					}
				]
			}
		]
	},
	"turnover": {
		"title": "流水",
		"url": "",
		"child": [
			{
				"title": "流水",
				"url": "",
				"child": [
					{
						"title": "订单流水",
						"url": "orderFlow.html",
					},
					{
						"title": "充值流水",
						"url": "rechargeFlow.html",
					},
					{
						"title": "交易流水",
						"url": "tradeFlow.html",
					}
				]
			}
		]
	},
	"report": {
		"title": "报表",
		"url": "",
		"child": [
			{
				"title": "对账报表",
				"url": "",
				"child": [
					{
						"title": "对账报表",
						"url": "reconciliationReport.html",
					}
				]
			},
			{
				"title": "清算报表",
				"url": "",
				"child": [
					{
						"title": "清分报表",
						"url": "clearReport.html",
					},
					{
						"title": "结算报表",
						"url": "settlementReport.html",
					}
				]
			}
		]
	}
}

/*  定义全局方法，
 *  菜单的使用，渲染等等
 * 
 */
var GlobalIndex = {
	menu: undefined,
	init: function(){
		var _that = this;
		_that.menu = GlobalMenu;
		$(".cui-platform-nav").find("li").each(function(){
			$(this).click(function(){
				$(this).siblings().removeClass("active");
				$(this).addClass("active");
				_that.renderMenu($(this).attr("data-menu"));
			})
		});
		_that.menuClick();
	},
	renderMenu: function(menuIndex){
		var _that =this;
		$("#accordion2").html("");
		var currentMenu = _that.menu[menuIndex];
		var item;
		if(currentMenu["child"] == null){
			$("#cui-platform-book").attr("src",currentMenu["url"]);
			return false;
		}
		var lis = "";
		for(var i=0,l=currentMenu["child"].length;i<l;i++){
			var li ="";
			var id_random = Math.ceil(Math.random()*100);
			var id_href = "#collapse"+ id_random;
			var id = "collapse"+ id_random;
			var item = currentMenu["child"][i];
			console.log(item);
			lis += '<div class="accordion-group cui-menu-item"><div class="accordion-heading"><a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="'+id_href+'">' + item["title"] +'</a></div></div><div id="'+id+'" class="accordion-body collapse" style="height:0px;"><div class="accordion-inner"><ul>';
			
			var child = item["child"];
			for(var j=0,m=child.length;j<m;j++){
				lis += "<li data-url='"+ child[j]["url"] +"'>"+child[j]["title"]+"</li>";	
			}
			lis +=  '</ul></div></div></div>';
		}
		$("#accordion2").append($(lis));
		_that.menuClick();
	},
	menuClick: function(){
		$("#accordion2").find("li").each(function(){
			$(this).click(function(){
				$("#accordion2").find("li").removeClass("active");
				$(this).addClass("active");
				var url = $(this).attr("data-url");
				$("#cui-platform-book").attr("src",url);
			})
		})
	}
};

$(function(){
	GlobalIndex.init();
});
