var sData={};
var readData= function(){
	//var sData={};
	sData.name= document.querySelector("#sname").value;
	sData.age= document.querySelector("#sage").value;
	sData.class= document.querySelector("#sclass").value;
	sData.marks=[];
	//sData.marks[0]=document.querySelector("#m1").value;
	//sData.marks[1]=document.querySelector("#m2").value;
	//sData.marks[2]=document.querySelector("m3").value;
	//sData.marks[3]=document.querySelector("m4").value;
	//sData.marks[4]=document.querySelector("m5").value;
	for(var i=0;i<5;i++){
		var id = "#m" + (i+1);
		sData.marks[i]=document.querySelector(id).value;
		sData.marks[i]=parseInt(sData.marks[i]);
	}
	getGrade();
	//console.log(sData);
}


var getTotalAndAvg= function(){
	sData.total=0;
	for(var i=0; i< sData.marks.length ; i++){
		sData.total += sData.marks[i];
	}
	sData.avg=sData.total/sData.marks.length;
}


function getGrade(){
	getTotalAndAvg();
	if(sData.avg > 40)
		sData.grade="Passed";
	else
		sData.grade="You have a surprise"

	//console.log(sData);
	displayGradeCard();
}

function displayGradeCard() {
	document.querySelector("#uname").innerHTML = "<b>" + sData.name + "</b>"
	document.querySelector("#uage").innerHTML = "<b>" + sData.age + "</b>"
	document.querySelector("#utot").innerHTML = "<b>" + sData.total + "</b>"
	document.querySelector("#uavg").innerHTML = "<b>" + sData.avg + "</b>"
	document.querySelector("#ugrade").innerHTML = "<b>" + sData.grade + "</b>";

	document.querySelector(".pCard").style.display = "block";
	document.querySelector("#readBlock").style.display = 'none';
}