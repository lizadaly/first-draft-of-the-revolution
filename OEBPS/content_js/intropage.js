    // core data for this page: what are you called, what do you link to, and are you
    // static or a letter
    var startUnlocked = true;
    var staticContent = true;
    var prevChapter = "index";
    var thisChapter = "intropage";
    var nextChapter = "intropage2";
    var preparationChapter = "index";
	
    var page_specific_unlock = function() {
        

//        $('.button').hide();

        if (isChapterComplete(thisChapter))
        {
            $('#intro p').removeClass('animating');
            $('#intro div span').removeClass('animating');  
            $('#intro p').addClass('non-animating');
            $('#intro div span').addClass('non-animating');  

            
        } else
        {
         
            $('#intro p').addClass('animating');
            $('#intro div span').addClass('animating');  
            $('#intro p').removeClass('non-animating');
            $('#intro div span').removeClass('non-animating');  

            chapterComplete(thisChapter);
        }
    }
