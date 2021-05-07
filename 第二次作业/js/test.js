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