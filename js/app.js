var currentState=0;
	var currentPage=$('#title-page');
	var pages=[];
	pages.push($('#title-page'));
	$('.team-page').each(function(index,item){
		pages.push($(item))
	})
	$('#nav-left').on('click',_.debounce(function(){
		currentState--;
		if(currentState < 0){
			currentState=pages.length-1;
			var nextPage=pages[currentState];
			var currLeague=currentPage.attr('id');
			var nextLeague=nextPage.attr('id')
			var currCrest=$('#'+currLeague+'-crest');
			var nextCrest=$('#'+nextLeague+'-crest');
            $('#page-info-parent').fadeIn(400);
            $('#'+currLeague+'-info').fadeOut(400)
            
            setTimeout(function(){
                $('#'+nextLeague+'-info').fadeIn(400)
            },400)

			$('.team-page').removeClass('offstage-right').addClass('offstage-left')
			$('#crests-parent div').removeClass('offstage-right').addClass('offstage-left')

			currentPage.removeClass('active').addClass('offstage-left')
			nextPage.removeClass('offstage-left').addClass('active')

			currCrest.removeClass('active').addClass('offstage-left')
			nextCrest.removeClass('offstage-left').addClass('active')
			
			var widthToTranslate=$('#title-page-background').width()+getTeamBackgroundLeftovers();
			$('#background-images').css('transform','translateX(-'+widthToTranslate+'px)')
			console.log('[widthToTranslate]:'+widthToTranslate)
		}else{
			var nextPage=pages[currentState];
			var currLeague=currentPage.attr('id');
			var nextLeague=nextPage.attr('id')
			var currCrest=$('#'+currLeague+'-crest');
			var nextCrest=$('#'+nextLeague+'-crest');
            $('#page-info-parent').fadeIn(400);
            $('#'+currLeague+'-info').fadeOut(400)

            setTimeout(function(){
                $('#'+nextLeague+'-info').fadeIn(400)
            },400)

			currentPage.removeClass('active').addClass('offstage-right')
			nextPage.removeClass('offstage-left').addClass('active')

			currCrest.removeClass('active').addClass('offstage-right')
			nextCrest.removeClass('offstage-left').addClass('active')
			var widthToTranslate=$('#title-page-background').width()+getTeamBackgroundLeftovers();
			if(currentState == 0){
                $('#page-info-parent').fadeOut(400);
                $('.page-info').fadeOut(400)
                
				$('#background-images').css('transform','translateX(0px)')
			}else{
				$('#background-images').css('transform','translateX(-'+widthToTranslate+'px)')
			}
			console.log('[widthToTranslate]:'+widthToTranslate)
		}
		currentPage=nextPage
	},400))
	$('#nav-right').on('click',_.debounce(function(){
		currentState++;
		if(currentState > pages.length-1){
			currentState=0;
			var nextPage=pages[currentState];
			var currLeague=currentPage.attr('id')
			var nextLeague=nextPage.attr('id')
			var currCrest=$('#'+currLeague+'-crest');
            $('#page-info-parent').fadeOut(400);
            $('.page-info').fadeOut(400)

			currentPage.removeClass('active')
			currCrest.removeClass('active')
			$('.team-page').removeClass('offstage-left').addClass('offstage-right')
			$('#title-page').removeClass('offstage-left').addClass('active')
			$('#crests-parent div').removeClass('offstage-left').addClass('offstage-right')

			$('#background-images').css('transform','translateX('+0+'px)')
		}else{
			var nextPage=pages[currentState];
			var currLeague=currentPage.attr('id')
			var nextLeague=nextPage.attr('id')
			var currCrest=$('#'+currLeague+'-crest');
			var nextCrest=$('#'+nextLeague+'-crest');
            $('#page-info-parent').fadeIn(400);
            $('#'+currLeague+'-info').fadeOut(400)

            setTimeout(function(){
                $('#'+nextLeague+'-info').fadeIn(400)
            },400)
			currentPage.removeClass('active')
			currCrest.removeClass('active')

			currentPage.addClass('offstage-left')
			currCrest.addClass('offstage-left')
			nextPage.removeClass('offstage-right').addClass('active')
			nextCrest.removeClass('offstage-right').addClass('active')

			var widthToTranslate=$('#title-page-background').width()+getTeamBackgroundLeftovers();
			$('#background-images').css('transform','translateX(-'+widthToTranslate+'px)')
			console.log('[widthToTranslate]:'+widthToTranslate)
		}
		currentPage=nextPage
	},400))

	function getTeamBackgroundLeftovers(){
		var leftovers=$('#team-page-background').width()-$(window).width()
		var move=((currentState-1)/pages.length)*leftovers;
		console.log('[move]: '+move)
		return move
	}