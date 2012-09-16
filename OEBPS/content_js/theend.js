
    // core data for this page: what are you called, what do you link to, and are you
    // static or a letter
    var startUnlocked = false;
    var staticContent = true;
    var prevChapter = "chapter18";
    var thisChapter = "theend";
    var nextChapter = "";
    var preparationChapter = "chapter18";
    var page_specific_unlock = function() {
    
        if (webVersion)
        {
            $('.restart').bind("tap click", function() {
                    if (confirm("Return to title page?"))
                    { 
                        document.location = "index.html";
                    }                
            });
        } else {
                $('.restart').hide();
        }
    }