
    
        // core data for this page: what are you called, what do you link to, and are you
        // static or a letter
        var startUnlocked = true;
        var staticContent = true;
        var prevChapter = "";
        var thisChapter = "index";
        var nextChapter = "intropage";
        var preparationChapter = "";
        
        var page_specific_unlock = function() {
            // we both to unlock so the forward-page button will work
            unlockChapter("intropage2");
            unlockChapter("intropage");
            unlockChapter("chapter1");
    
            // in web-version, we remove the cover entirely 
            // and replace it with the leather-bound image
            // done this way to keep internal structure the same between versions!
            
            if (webVersion) {
                $('#cover-content').empty();
                $('#container').addClass('book-cover').removeClass('plain-bg');   
                $('#header h1').empty();
            }
        
            if (isChapterComplete(thisChapter))
            {
                $('#cover .animating').each( function() { 
                    $(this).removeClass("animating"); 
                    $(this).addClass("non-animating"); 
                });
                $('#cover span').show(); 
            }
            else
            {
                $('#cover span').addClass('fadein'); 
                $('#cover span').show(); 
                chapterComplete(thisChapter);
            }
   
            if (webVersion)
            {
                $('.reset').bind("tap click", function() {
                    if (confirm("Restart the story from the beginning?"))
                    { 
                        resetStory();
        
                        chapterComplete(thisChapter);  
                        
                        unlockChapter("intropage");
                        unlockChapter("intropage2");
                        unlockChapter("chapter1");


                        $('#cover .non-animating').each( function() { 
                            $(this).addClass("animating"); 
                            $(this).removeClass("non-animating"); 
                        } );                
                        $('#cover span').hide(); 
                        $('#cover span').addClass('fadein'); 
                        $('#cover span').show(); 
                    }                
        
                });
            } else {
                $('.reset').hide();
            }
            
        }
        
 