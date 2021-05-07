html:
<!DOCTYPE html>
<html>
  <head>
  	<link rel="stylesheet" type="text/css" href="CSS1.css">
  </head>
  <body>
    <div class="m-box" id="more">
      <h1 id="h1">date</h1>
      <ul id="uid">
        <li class="m-item" id="p1">p1</li>
        <li class="m-item" id="p2">p2</li>
        <li class="m-item" id="p3">p3</li>
        <li class="m-item" id="p4">p4</li>
        <li class="m-item" id="p5">p5</li>
        <li class="m-item" id="p6">p6</li>
        <li class="m-item" id="p7">p7</li>
        <li class="m-item" id="p8">p8</li>
      </ul>
    </div>
    <script src="test.js"></script>
  </body>
</html>

js:
document.getElementById("more").addEventListener("click",function(e){
	/*alert(e.target.id);*/
   if(e.target && e.target.nodeName=="LI"){
   	 if(e.target.id=="p1"){
   	 	p1.style.color="red";
   	 }
   	 if(e.target.id=="p2"){
   	 	var d = new Date();
   	 	h1.innerHTML=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
   	 }
     if(e.target.id=="p3"){
     	p3.className="fn-active  m-item";
     }
     if(e.target.id=="p4"){
     	p8.remove();
     }
     if(e.target.id=="p5"){
     	window.open("http://www.taobao.com");
     }
     if(e.target.id=="p6"){
        var u=document.getElementById("more");
     	var createLi=document.createElement("li");
     	var text=document.createTextNode("p9");
     	createLi.appendChild(text);
        u.appendChild(createLi);
     }
     if(e.target.id=="p7"){
     	var divt=document.getElementById("more");
     	var x=0;
     	x=window.screen.width ;
     	divt.style.width=x;
     }
   }	
});




CSS:
@charset "UTF-8";
/*.m-mark{
	width:14px;
	height: 15px;
	border: 7px solid #666;
	border-bottom: 8px solid #transparent;
	border-radius: 3px 3px 0 0;
	display: block;
	/*box-sizing: border-box;*/
}*/
.m-item{
	font-size:60px;
}
.fn-active{
	font-size:90px;
}
.m-box{
	width:100px;
}
