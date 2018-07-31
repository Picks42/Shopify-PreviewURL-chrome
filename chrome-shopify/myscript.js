/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 $(document).ready(function () {
 	
 	function customThemePreview(){
 		if($(".themes-list__actions .ui-button").length > 0 && $(".custom_link_made_p").length == 0){
 			window.cn = function(o){return"undefined"==typeof o||null==o||""==o.toString().trim()};
 			$(".themes-list__actions").each(function(index, el) {
 				var attr = $(".ui-action-list__item:first button",el).attr("data-bind-event-click");
 				if(!cn(attr)){
 					attr = attr.replace(/[^0-9]/g, '');
 					var themeP = "https://"+window.location.hostname+"/?preview_theme_id="+attr;
 					var li = $("<li class='ui-action-list__item'><a class='ui-action-list-action custom_link_made_p' target='_blank' href='"+themeP+"'>Custom URL</a></li>");
 					$(".ui-action-list:first",el).prepend(li);
 				}
 			});

 		}
 	}
 	customThemePreview();
 	setTimeout(function(){
 		customThemePreview();
 	},1000);
 	setTimeout(function(){
 		customThemePreview();
 	},3000);
 	setTimeout(function(){
 		customThemePreview();
 	},6000);
 	setTimeout(function(){
 		customThemePreview();
 	},10000);
 	setTimeout(function(){
 		customThemePreview();
 	},15000);
 	
 });

