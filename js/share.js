var shareURL, shareURLSTAT, shareURLSTATtw, shareTitle, shareDescription, shareIMG;

function share_fb(){
         		
	  var ShareURL =	document.URL;
		  

		var share_url="http://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(ShareURL);
		newwindowfb = window.open(share_url,'sharer','toolbar=0,status=0,width=650,height=400,resizable=yes');
		if (window.focus) { newwindowfb.focus(); }
	
	  
	return false;
}

function share_tw(){
	var tw_url  =document.URL;
	
	var TitleDesc;
	
	var description;
	var metas = document.getElementsByTagName('meta');
	for (var x=0,y=metas.length; x<y; x++) {
		
		if(metas[x].getAttribute('property'))	{
		  if (metas[x].getAttribute('property').toLowerCase() == "tw:description") {
			TitleDesc = metas[x];
		  }
		  
		}
	  
	}

	//var tw_text = TitleDesc.content+" "+description.content;
	var tw_text = TitleDesc.content;
	
	newwindowtw = window.open('http://twitter.com/share?url=' + encodeURIComponent(tw_url) + '&text=' + encodeURIComponent(tw_text), 'sharer', 'toolbar=0, status=0, width=650, height=400');		
	if (window.focus) { newwindowtw.focus(); }
	return false;
}

function share_go(){
	var shareURL =	document.URL;
	newwindowgo= window.open('https://plus.google.com/share?url=' + encodeURIComponent(shareURL) , 'sharer', 'toolbar=0, status=0, width=600, height=600');
	if (window.focus) { newwindowgo.focus(); }
	return false;
	
}
function share_lineit(){
     var tw_url  =document.URL;
	 var TitleDesc;
	
	var description;
	var metas = document.getElementsByTagName('meta');
	for (var x=0,y=metas.length; x<y; x++) {
		
		if(metas[x].getAttribute('property'))	{
		  if (metas[x].getAttribute('property').toLowerCase() == "og:description") {
			description = metas[x];
		  }else if (metas[x].getAttribute('property').toLowerCase() == "og:title") {
			TitleDesc = metas[x];
		  }
		  
		}
	  
	}
	var tw_text = TitleDesc.content;
	newwindowtw = window.open('http://line.me/R/msg/' + encodeURIComponent(tw_text) + encodeURIComponent(tw_url));
	if (window.focus) { newwindowgo.focus(); }
	return false;
	}