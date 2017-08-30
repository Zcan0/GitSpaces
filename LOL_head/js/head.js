
//导航

//querySelector() 通过类名或标签名来获取标签
var onav = document.querySelector(".nav");
var olayer = document.querySelector(".layer");

//鼠标悬浮在nav标签上
onav.onmouseover = function() {
	//将分层显示出来
	olayer.style.display = "block";
    //设置鼠标悬浮在分层上时，设置分层的属性为显示
	olayer.onmouseover = function() {
		olayer.style.display = "block";
	}
	olayer.onmouseout = function() {
		olayer.style.display = "none";
	}
}
//鼠标移出nav标签时，设置分层隐藏
onav.onmouseout = function() {
	olayer.style.display = "none";
}
