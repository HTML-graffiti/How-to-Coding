function getRumRgba(){
	var clr = 'linear-gradient(0deg,rgba(';
	for(i=0; i < 3; i++){
		clr = clr + Math.floor( Math.random()*255) + ',';
	}
	clr = clr + Math.floor( Math.random()*10)/10 + '), rgba(0,0,0,0) 75%)'
	return clr;
}
