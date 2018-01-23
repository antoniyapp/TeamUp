/**
 * Created by Antoniya on 3.12.2017 г..
 */
function createTable(res,groups){//array
	alert('yes');
	console.log(JSON.stringify(res));
	 let table=$('<table></table>');
	 let thead=$('<thead></thead>').appendTo(table);
	 $('<th></th>').appendTo(thead);
	 for(let i=0;i<groups;i++){
			 $('<th></th>').text(''+(i+1)).appendTo(thead);
		 }
		 
	 for(let person in res){
		 let row=$('<tr></tr').appendTo(table);
		 let num=Number(person)+1;
		 let rowHead=$('<th></th>').text(''+num).appendTo(row);
		 for(let j=0;j<groups;j++){
			 if(res[person]===(j+1)){
				 $('<td></td>').attr('style','background-color:red').appendTo(row);
			 }
			 else {
				 $('<td></td>').appendTo(row);
			 }
		 }
		 alert('res');
	 }
	  table.appendTo("#res");
 }
 
function showResult() {
    $('#load').hide();
    $('#result').show();
    let res= shufflePeople($('#people').val(),$('#groups').val());
    createTable(res,$('#groups').val());
}
function showHide(people,groups) {
    if(isNaN(people)||isNaN(groups)) {
        $('#error').html('Incorrect input.Please try again.');
    }
    else {
        $('#input-area').hide();
        $('#order').show();
    }
}
function initGroups(people,groups) {

    let is_mobile = false;

    if( $('#load').css('opacity')== 0) {
        is_mobile = true;
    }

    if(is_mobile == true) {
        $('#order').hide();
        $('#shake').show();
    }
    else {
        $('#order').hide();
        $('#shake').show();
        $('#load').show();
    }
}
//s media queries show hide na sekciite za mobilni prilojeniq i web ===>utre
function shufflePeople(people,groups) {

    let array=[];
    for(let i=0;i<people;i++){
        currNum=i%groups;
        array[i]=currNum+1;
    }
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    console.log(array);
    return array;
}