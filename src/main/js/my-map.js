var map = new AMap.Map('my-container',{
	    resizeEnable:true,
	    zoom:5,
	    center:[126.657716855,45.7732246332],
	    // viewMode:'3D',
	    
	})
	addMarker();
	function addMarker(){
	    var marker = new AMap.Marker({
	        map:map,
			position:[126.657716855,45.7732246332],
			title:'黑龙江',
		})
		new AMap.Marker({
			position: [128.223572,46.1333349],
				// position:[131.1476024975,46.7346107262],
				map: map,
				title:'haer'
		})
		
		AMap.event.addListener(marker,'click',function(e){
				var map1 = new AMap.Map('my-container',{
				resizeEnable:true,
				zoom:13,
				center:[125.223572,47.1333349],
			})
			new AMap.Marker({
				position: [125.223572,47.1333349],
				// position:[131.1476024975,46.7346107262],
				map: map1,
				title:'北支渠'
			});
			new AMap.Marker({
				// position: [125.223572,47.1333349],
				position:[125.151562,47.1334449],
				map: map1,
				title:'北支渠末端'
			});
			    })
			}
// var map = new AMap.Map('my-container',{
//     resizeEnable:true,
//     zoom:5,
//     center:[126.657716855,45.7732246332],
//     // viewMode:'3D',
//     title:'哈尔滨'
// })
// addMarker();
// function addMarker(){
//     var marker = new AMap.Marker({
//         map:map,
//         position:[126.657716855,45.7732246332]
//     })
//     AMap.event.addListener(marker,'click',function(){
//         infoWindow.open(map,marker.getPosition());
//     })
// }
// var title = '翔冠科技公司监控点分布',
// content =[];
// content.push("<span><a scr='#'>集贤</a></span>");
// content.push("<span><a scr='#'>林甸</a></span>");
// var infoWindow = new AMap.InfoWindow({
//     isCustom:true,
//     content:creakInfoWindow(title,content.join("<br/>")),
//     offset:new AMap.Pixel(16,-45)
// })
// function creakInfoWindow(title, content){
//     var info = document.createElement("div")
//     info.className = "custom-info input-card content-window-card";

//     var top = document.createElement("div");
//     var titleD = document.createElement("div");
//     var closeX = document.createElement("img");
//     top.className = "info-top";
//     titleD.innerHTML = title;
//     closeX.src = "https://webapi.amap.com/images/close2.gif";
//     closeX.onclick = closeInfoWindow;

//     top.appendChild(titleD);
//     top.appendChild(closeX);
//     info.appendChild(top);

//     var middle = document.createElement("div");
//     middle.className = "info-middle";
//     middle.style.backgroundColor = 'white';
//     middle.innerHTML = content;
//     info.appendChild(middle);

//     var bottom = document.createElement("div");
//     bottom.className = "info-bottom";
//     bottom.style.position = 'relative';
//     bottom.style.top = '0px';
//     bottom.style.margin = '0 auto';
//     var sharp = document.createElement("img");
//     sharp.src = "https://webapi.amap.com/images/sharp.png";
//     bottom.appendChild(sharp);
//     info.appendChild(bottom);
//     return info;
// }
// function closeInfoWindow() {
//     map.clearInfoWindow();
// }
// // addMarker();
// // var marker = new AMap.Marker({
// //     position:[126.68,45.77]
// // })
// // var infoWindow = new AMap.InfoWindow({
// //     isCustom:true,
// //     content:'黑龙江',
// //     offset: new AMap.pixel(16,-45),
// // })
// // var onMarkerClick = function(e){
// //     infoWindow.open(map,e.target.getPosition());
// // }
// // marker.onclicke('click',onMarkerClick)
// // map.setFitView();


// // var map = new AMap.Map('container',{resizeEnable: true,zoom:4});
// //         var markers = []; //province见Demo引用的JS文件
// //         for (var i = 0; i < provinces.length; i += 1) {
// //     			var marker;
// //     			if (provinces[i].type === 0) {
// //     				var icon = new AMap.Icon({
// //     					image: 'https://vdata.amap.com/icons/b18/1/2.png',
// //     					size: new AMap.Size(24, 24)
// //     				});
// //     				marker = new AMap.Marker({
// //     					icon: icon,
// //     					position: provinces[i].center.split(','),
// //     					offset: new AMap.Pixel(-12,-12),
// //     					zIndex: 101,
// //     					title: provinces[i].name,
// //     					map: map
// //     				});
// //     			} else {
// //     				marker = new AMap.Marker({
// //     					position: provinces[i].center.split(','),
// //     					title: provinces[i].name,
// //     					map: map
// //     				});
// //             if (provinces[i].type === 2) {
// //       				var content= "<div class = 'taiwan'>宝岛台湾</div>";
// //       				baodao = new AMap.Marker({
// //       					content: content,
// //       					position: provinces[i].center.split(','),
// //       					title: provinces[i].name,
// //       					offset: new AMap.Pixel(0,0),
// //       					map: map
// //       				});
// //             }
// //     			// }
// //     			markers.push(marker);
// //     		}
// // 			  map.setFitView();


// var map = new AMap.Map('container',{resizeEnable: true,zoom:4});
// var markers = []; 
// for (var i = 0; i < provinces.length; i += 1) {
// 		var marker;
// 		if (provinces[i].type === 0) {
// 			var icon = new AMap.Icon({
// 				image: 'https://vdata.amap.com/icons/b18/1/2.png',
// 				size: new AMap.Size(24, 24)
// 			});
// 			marker = new AMap.Marker({
// 				icon: icon,
// 				position: provinces[i].center.split(','),
// 				offset: new AMap.Pixel(-12,-12),
// 				zIndex: 101,
// 				title: provinces[i].name,
// 				map: map
// 			});
// 		} else {
// 			marker = new AMap.Marker({
// 				position: provinces[i].center.split(','),
// 				title: provinces[i].name,
// 				map: map
// 			});
// 	if (provinces[i].type === 2) {
// 			  var content= "<div class = 'taiwan'>宝岛台湾</div>";
// 			  baodao = new AMap.Marker({
// 				  content: content,
// 				  position: provinces[i].center.split(','),
// 				  title: provinces[i].name,
// 				  offset: new AMap.Pixel(0,0),
// 				  map: map
// 			  });
// 	}
// 		}
// 		markers.push(marker);
// 	}
	//   map.setFitView();