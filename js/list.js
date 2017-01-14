// 根据屏幕尺寸设置相应根字体大小
  var oHtml = document.getElementsByTagName('html')[0],
    screenWidth = document.documentElement.offsetWidth || document.body.offsetWidth,
    nowFont = 100*screenWidth / 640;
    oHtml.style.fontSize = nowFont+"px";
//设置scroll
	var myscroll;
	function loaded(){
		setTimeout(function(){
			myscroll = new iScroll("wrapper");
		},300);
	}
	window.addEventListener("load",loaded,false);
// // 请求数据
// var listApp = angular.module('listApp', []);
// 	listApp.controller('listCtrl',function($scope,$http,$sce){
// 		// 分类数据
// 		$http({
// 			url:"http://datainfo.duapp.com/shopdata/getclass.php"
// 		}).success(function(res){
// 			// console.log(res);
// 			for (var i = 0; i < res.length; i++) {
// 				res[i].icon = $sce.trustAsHtml(res[i].icon);
// 			}
// 			$scope.classifyData = res;
// 		});

// 		// 商品或列表数据
// 		var listUrl = "http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSON_CALLBACK";
// 		$http.jsonp(listUrl).success(function (data) {
// 			console.log(data);
// 			$scope.listGoodsInfo = data;
// 		});
// 	});