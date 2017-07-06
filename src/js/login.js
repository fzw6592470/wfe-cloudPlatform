/*
 * 	作者：lele199007@sina.com
 * 	时间：2017-07-03
 *  描述：登录页面js
 */

"use strict";

let Login = {
	login_url: undefined,
	login_btn: document.getElementById("cui_login_btn"),
	login_username: document.getElementById("cui-username"),
	login_password: document.getElementById("cui-password"),
	login_varifycode: document.getElementById("cui-varify"),
	login_form: document.getElementById("cui_login_form"),
	login_alert: document.getElementById("cui_alert"),
	login_alert_msg: document.getElementById("cui_alert_msg"),
	init: function(){
		let _that = this;
		_that.login_url = "./index.html";
		
		_that.login_btn.onclick = function(){
			_that.loginSystem(_that);
		};
	},
	loginSystem: function(_that){
		let username = $.trim(_that.login_username.value);
		let password = $.trim(_that.login_password.value);
		let varifyCode = $.trim(_that.login_varifycode.value);
		
		if(_that.checkStringValidate(username)){
			_that.login_alert.style.display = "block";
			_that.login_alert_msg.innerHTML = "用户名只能输入字母和数字的组合。";
			return false;
		}
		
		if(_that.checkStringValidate(password)){
			_that.login_alert.style.display = "block";
			_that.login_alert_msg.innerHTML = "密码只能输入6位字母和数字的组合。";
			return false;
		}
		
		//暂不校验验证码
		
		_that.login_form.setAttribute("action", _that.login_url);
		_that.login_form.setAttribute("method", "post");
		_that.login_form.submit();
		
		
	},
	checkStringValidate: function(val){
		
		let exg = /[a-zA-Z0-9]+$/g;
		
		if(!exg.test(val)){
			return true;
		}
		return false;
	},
	checkPasswordValidate: function(){
		
	},
	checkVarifyCodeValidate: function(){
		
	},
}

$(function(){
	Login.init();
})
