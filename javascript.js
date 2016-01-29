$( document ).ready(function() {
	var turn = 0;
	var turnCharacter;
	var winner = null;
    $('td').on('click', function(e){

    	//incriments turn var for every click made on board

    	e = $(this);

    	console.log('this has been clicked', e);
	
    	

    	if(e.html() === '' && winner === null){

    		turn = turn + 1; 

    			if(turn % 2 === 0){
		    		 turnCharacter = '0';
		    	}else{
		    		 turnCharacter= 'X';
		    	}

    		e.html(turnCharacter); // changing html within selected td element to X or 0
    		if(turn >= 5){
    			$('td').each(function(index){
    				console.log($(this).data('id'))
    				var XCount;
    				var OCount;
    				if($(this).html() === 'X'){
    					XCount += $(this).data('id');
    					console.log(XCount, 'number has been added')
    				}else{
    					OCount += $(this).data('id');
    				}
    				// console.log(OCount, XCount)
    				// if(XCount ===)
    				
    			})
    		}
    	}else{
    		$('#message').html('this square has already been taken, Please select a differnt square!')
    	}
    	
    })
});

//21
//137
//11100
//170
//1061
//10103
//1097
//1043