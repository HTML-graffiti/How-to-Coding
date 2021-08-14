function getRumRgba(){
	var clr = 'rgba(';
	for(i=0; i < 3; i++){
		clr = clr + Math.floor( Math.random()*255) + ',';
	}
	clr = clr + Math.floor( Math.random()*10)/10 + ')';
	return clr;
}
