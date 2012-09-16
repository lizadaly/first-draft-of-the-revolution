
    // controls use of localStorage, amongst other things
    var webVersion = true;
    var debugUnlockEverything = false;

    // this is the key name for the local storage variable
    var storageId = "FirstDraftOfTheRevolution_v33";

    //---------------------------------------------------------------------------
    //      Page sequence
    //---------------------------------------------------------------------------    

    var allowGlow = true;
    
    var jqNextButton = null;
    var jqPrevButton = null;

	$(document).ready(function(){ 

        ChapterObject.chapterContainer = $('#chapter_container');

        if (webVersion)        
            $("#container").addClass("invisible");


	    if (startUnlocked)
	        unlockChapter(thisChapter);

        if (isChapterComplete(thisChapter))
        {
            if (!staticContent)
                ChapterObject.rebuildSavedGameState(thisChapter);

            if (page_specific_unlock)
        	        page_specific_unlock();

        	navButtons();
        }
        else
        {
            if (!startUnlocked)
            {
                // hide everything on this page, so it's blank when unlocked

                hide_body_content();
            }

            if (!staticContent) {  

                // get a gameplay chapter together (while still invisible!) 
                ChapterObject.get_chapter(thisChapter);
            }      


            // Begin the update loop that will show the text when it's time
            show_body_content_when_unlocked(thisChapter, preparationChapter);       

            // bind the "continue" element on this page to load another page
            bind_continue_to(thisChapter, nextChapter);        
        }

        if (webVersion)        
            animateIn($("#container"), 2);
        
	})


    var ChapterObject = {};

    var highlight_on = false;
    
    //---------------------------------------------------------------------------
    //      Hiding the page, loading the page
    //--------------------------------------------------------------------------- 


    var contentReady = function(chapterName) {
    
        // AUTO UNLOCK EVERYTHING on iBooks...!
        if (!webVersion || debugUnlockEverything)
        {            
            return true;
        }

        var currentGameState = getSavedGameState(); 
    
        // test to see if this chapter has been unlocked yet
        if (currentGameState[chapterName])
            return true;
        
        return false;
        
    }
        
    var unlockChapter = function(chapterToUnlock) {
        // unlocks the chapter called chapterToUnlock
        
        var currentGameState = getSavedGameState();
        if (!currentGameState[chapterToUnlock])
            currentGameState[chapterToUnlock] = {};
        writeSavedGameState(currentGameState); 
        
        if (jqNextButton)
            jqNextButton.show();
    }
    
    var resetStory = function() {
        if (webVersion)
            delete localStorage[storageId];    
    }
    
    var chapterComplete = function(chapterName) {
        var currentGameState = getSavedGameState();
        if (!currentGameState[chapterName])
        {
            currentGameState[chapterName] = {};            
        }
        currentGameState[chapterName].completed = true;
        writeSavedGameState(currentGameState);        
    }
    
    var isChapterComplete = function(chapterName) {
        var currentGameState = getSavedGameState(); 
        if (currentGameState[chapterName])
            if (currentGameState[chapterName].completed)
                return true;
        return false;        
    }
    
    var fakeLocalStorage = "";
    
    var getSavedGameState = function() {
        var currentGameState = {}; 
        var retrievedData = "";
        
        if (webVersion) {
            if (localStorage[storageId]) 
                retrievedData = localStorage[storageId];
        } else {
            retrievedData = fakeLocalStorage;
        }
        
        if (retrievedData)
            currentGameState = JSON.parse(retrievedData);
        return currentGameState;        
    }
    
    var writeSavedGameState = function(currentGameState) {
        var writeData = JSON.stringify(currentGameState);
        if (webVersion) {
            localStorage[storageId] = writeData;  
        } else {
            fakeLocalStorage = writeData;
        }
   

    }
    

//---------------------------------------------------------------------------
    //      Hiding the page, loading the page
    //---------------------------------------------------------------------------    


	var hide_body_content = function() {
	    ChapterObject.chapterContainer.hide();
	}
	
	var show_body_content_when_unlocked = function(chapter_num, chapter_before) {
	
	    var checkContent = function(chapter_num, chapter_before) {
	        if (contentReady(chapter_num))
	        {        
        	    ChapterObject.chapterContainer.show();	
        	    if (ChapterObject.pageUpdateLoop)
        	        clearInterval(ChapterObject.pageUpdateLoop);
        	    
                // create web version forward/backward buttons

                navButtons();
                
        	    if (page_specific_unlock)
        	        page_specific_unlock();
    
        	    return true;
        	}	
        	
        	if (chapter_before)
        	{
                if (contentReady(chapter_before))
                {
                    if (ChapterObject.pageUpdateLoop)
                        clearInterval(ChapterObject.pageUpdateLoop);
                    ChapterObject.pageUpdateLoop = setInterval(function() {             checkContent(chapter_num, null); } , 250);	    
                }
            }
            
            return false;
	    }
	    
        if (checkContent(chapter_num, chapter_before)) return;
	    
	    // repeatedly check this timer

	    if (!contentReady(chapter_before))
        {
	        ChapterObject.pageUpdateLoop = setInterval(function() { checkContent(chapter_num, chapter_before) } , 6000);	    
        }
	}
	
	var bind_continue_to = function(this_chapter, next_chapter) {
        var jqBoundElement = $('.continue');
	    jqBoundElement.bind("tap click touchstart", function() {
	    
	        unlockChapter(next_chapter);
	        
	        if (!staticContent) 
	            ChapterObject.solidify(this_chapter);
            else
                $('.disappear-once-done').hide();
	        
	        return false;
	    });
	}

    var navButtons = function() {

        var moveToPage = function(pageName) {
            if (webVersion) {
                animateAway($("#container"), true);
                setTimeout( function () {
                    document.location = pageName + ".html";
                }, 750);
            } else {
                document.location = pageName + ".html";
            }
        }

        if (prevChapter != "")
        {
            jqPrevButton = $("<div class='previous button'>Previous page</div>");
            $('#header').append(jqPrevButton);
            jqPrevButton.bind("click tap touchstart", function() {
                moveToPage(prevChapter);
                return false;
            });
        }
            
            
        if (nextChapter != "")
        {
            jqNextButton = $('<div class="next button">Next page</div>');
            $('#header').append(jqNextButton);
            jqNextButton.bind("click tap touchstart", function() {
                moveToPage(nextChapter);
                return false;
            });
            if (!contentReady(nextChapter))
                jqNextButton.hide();
        }
        
        $('.please_wait').remove();

    }	

	
    //---------------------------------------------------------------------------
    //      Gameplay Chapters
    //---------------------------------------------------------------------------    

	
	ChapterObject.get_chapter = function(chapter_name) {
        // Story object is the json data for the game
        
        makeContentObject(chapter_name);
        setSpeaker();
		
		ChapterObject.jqChapter = ChapterObject.getOriginalContentAsJq();
		ChapterObject.chapterContainer.append(ChapterObject.jqChapter);	    
	    
	    $('.chapter').get(0).addEventListener("touchend", glow_active_text, false);
	    $('.chapter').get(0).addEventListener("touchmove", movingWindow, false);       
        
	    if (webVersion)
	    {

            // clicking anywhere on the letter causes text to glow
            $('.chapter').bind("click", function(event) {
                glow_active_text(event);
                return false;
            });
	    }
	    
	}
	
    var setSpeaker = function() {
        ChapterObject.speaker = ChapterObject.content["-speaker"]; 		
        $('#container').addClass(ChapterObject.speaker);
    }
    var makeContentObject = function(chapter_name) {
        for (var i = 0 ; i < Story["chapter"].length; i++) {
            if (Story["chapter"][i]["-id"] == chapter_name) {
                ChapterObject.content = Story["chapter"][i];
                break;
            }
        }
    }
	
	// ----------- Lay out the initial letter -------------------

    ChapterObject.getOriginalContentAsJq = function() {
        var jqMainText = $('<div class="chapter"></div>');
        
        
        for ( var i = 0 ; i < ChapterObject.content.line.length ; i++)
        {
            if ( ChapterObject.content.line[i].inclusion)
            {
                if (ChapterObject.content.line[i].inclusion["-initial"] == "yes")
                {
                
                   var newLines = getLineAsJq(ChapterObject.content.line[i]);
                    
                    for (var j = 0 ; j < newLines.length ; j++)
                        jqMainText.append(newLines[j]);
                }
                
            }
        }	   
        jqMainText.append('<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>');
        jqMainText.find('.content').each( function () {                 
            $(this).addClass("visible");
        });
        return jqMainText;
    }
    
    // -------- Create a line of the letter, active if necessary, direct from data ------
    
    var getLineAsJq = function(lineObject) {
            
        var jqLines = [];
        
        if (!lineObject.content) {

            // the line has a components block, which we recurse through
            for (var i = 0 ; i < lineObject.components.line.length ; i++)
            {
                jqLines.push(getLineAsJq(lineObject.components.line[i])[0]);
            }
            
        } else {
            
            var jqLine = $('<div class="line content"></div>');
            
            // this line is simple, and contains just text
            jqLine.append(lineObject.content);
                        
            // is this sentence acceptable? Only really care if it's not
            if (lineObject.inclusion) {
                if (lineObject.inclusion["-final"] == "no")
                    jqLine.addClass("final-false");
                else
                    jqLine.addClass("final-true");
            }
            else
                jqLine.addClass("final-true");
            
            // may also contain a tag = internal name (but I don't think we care if it does?)
            
            // and a replacements block, and a removals block
            if (lineObject.replacements || lineObject.removals)
            {
                jqLine.data("replacements", lineObject.replacements);
                jqLine.data("removals", lineObject.removals);
                jqLine.bind("tap click touchstart", function() {
                    clickedActiveSentence(jqLine);
                    return false;
                });
      
                jqLine.addClass("active_sentence");

            }

            jqLine.data("text",lineObject.content);
            jqLines.push(jqLine);
        }
        
        return jqLines;
    }


    //------------------------------------------------------
    //
    //      Query functions
    //
    //------------------------------------------------------    


    ChapterObject.getLineObjectByTag = function(tagName) {
        tagName = stripDownString(tagName)
    
        // loop through chapter object to find the line with right tag
        // I think this can be done entirely as a top level search?
        for (var i = 0 ; i < ChapterObject.content.line.length ; i++) {        
            var thisTag = stripDownString(ChapterObject.content.line[i].tag);
            if (thisTag == tagName) {
                return ChapterObject.content.line[i];
            }
        }
        return null;
    }
    
    var stripDownString = function(txt) {
        if (!txt) return "";
        newTxt = txt.replace(/^\s*/, '');
        newTxt = newTxt.replace(/\s*$/, '');
        return newTxt;
    }
    
    
    function isArray(o) {
      return Object.prototype.toString.call(o) === '[object Array]';
    }

    //------------------------------------------------------
    //
    //      What happens when you press the body text
    //          - this is ugly because it has timers
    //              but shouldn't interfere with anything else
    //
    //------------------------------------------------------    
 

 
    var movingWindow = function(e) {
        // we're scrolling, so prevent the glow
        allowGlow = false;
    }
 
     var glow_active_text = function (e) {

        // if you've just clicked a line to produce a pop-up, this should do nothing
        if (!allowGlow) {
            allowGlow = true;
            return true;
        }

       
        // otherwise, this should remove highlights and popups
        if ($('.highlight').length > 0 || $('.liveText').length > 0) {
            fade_all_popups();
            return true;         
        }
        
        
        if ($('.popup').length == 0 && !highlight_on) {
                $('.active_sentence').each(function () { 
                        var block = this;
                        var jqBlock = $(this);
                        if (!highlight_on) {
                                // 1) white + shadow, no colour animation
                                setColour(jqBlock, "white");
                                jqBlock.removeClass("animateColor");
                                jqBlock.addClass("liveText");
                                
                                if (jqBlock.hasClass("final-false"))
                                    var delayTime = 1500;
                                else
                                    var delayTime = 3000;
                                
                                setTimeout(function() {
                                    if (!jqBlock.hasClass('highlight')) {
                                        setTimeout(function() {
                                            // 2) animate to black + shadow
                                            if (!jqBlock.hasClass('highlight') && jqBlock.hasClass('liveText'))
                                            {
                                                jqBlock.addClass("animateColor");
                                                setColour(jqBlock, "black");
                                                
                                                setTimeout(function() { 
                                                  
                                                    // 3) remove shadow
                                                    var jqBlock = $(block);
                                                    if (jqBlock.hasClass('liveText')  && jqBlock.hasClass('black')) {
                                                    //if (jqBlock.hasClass('highlight'))
                                                    //    setColour(jqBlock, "gray");            
                                                        jqBlock.removeClass("liveText");                                            jqBlock.removeClass("animateColor");
                                                    }
                                                }, 1500);
                                            }
                                        }, 1500);
                                    }
                                }, delayTime);
                        }
                }); 
		}
	 }
	 


    //------------------------------------------------------
    //
    //      What happens when you click an active line
    //
    //------------------------------------------------------    

    var inputLines = [];

    var InputLine = function(jqLine, tag, deleteOkay, lineClass, rewrite_header_printed, headingText, secondHeadingText) {                

            this.jqOption = $('<div class="' + lineClass + ' update-content removed"></div>');
            
            if (rewrite_header_printed) {
                this.jqOption.addClass('no-header');
                this.jqOption.append('<div class="will-or change-this show">' + secondHeadingText + '</div>');          
            }
            else {
                this.jqOption.append('<div class="change-this show">' + headingText +  '</div>');
            }

            
            this.jqOption.append("<li><div class='update-with-this'>&#8220;" + tag + "&#8221;</div></li>");
            
            this.jqOption.find('.update-with-this').bind("tap click touchstart", function() { 
                replacementChosen(jqLine, tag, deleteOkay);
                // prevent body text click from firing
                return false;
            });
            
    }

    var clickedActiveSentence = function(jqLine) {

        allowGlow = false;

        // if something is highlighted, any click acts as a cancel button
        if ($('.highlight').length > 0) {
            fade_all_popups();
            return true;         
        }
    
        fade_all_popups();
    
        // Highlight the text that we're replacing 
        jqLine.wrapInner('<span class="highlight"></span>');
        highlight_on = true;
        
        
        // Create the popup suggesting the replacements
        var jqPopup = $('<div class="popup invisible"></div>'); 

        jqPopup.css("top", jqLine.position().top + ChapterObject.chapterContainer.scrollTop() + jqLine.height());

        var replacementsBlock = jqLine.data("replacements");
        var removalsBlock = jqLine.data("removals");
        
        //build the popup from the data
        var rewrite_header_printed = false;
        var numOptions = 0;
        var currentOption = undefined;

        var gatherInputLines = function(sourceArray, headingText, secondHeadingText, lineClass, rewrite_header_printed, deleteOkay) {
        
            var arrayType = isArray(sourceArray);
        
            for (var i = 0;  i == 0 || (arrayType && i < sourceArray.length); i++)
            {

                if (arrayType) 
                    var tag = sourceArray[i];
                else
                    tag = sourceArray;
                 
                var newInputLine =  new InputLine(jqLine, tag, deleteOkay, lineClass, rewrite_header_printed, headingText, secondHeadingText );
                inputLines.push( newInputLine );
                
                rewrite_header_printed = true;
    
                numOptions++;                
                jqPopup.append( newInputLine.jqOption );
            }

        }

        if (replacementsBlock) 
            gatherInputLines(replacementsBlock["tag"], "Rewrite this", "or write", "replace-content", rewrite_header_printed, false);
        
        if (removalsBlock) 
            gatherInputLines(removalsBlock["tag"], "Erase", "or erase", "remove-text", rewrite_header_printed, true);
            
        // little arrows to scroll forwards and backwards    
        // surprisingly fiddly to implement, as they disappear when not needed
        var jqNextOption = $('<div class="next_option"></div>');
        var jqPreOption = $('<div class="pre_option"></div>');
        var jqOrMessage = $('<div class="or_message">or</div>');
            
        var jqOptions = jqPopup.find(".update-content");
        
        var setCurrentOption = function(idx) {
            if( idx !== currentOption ) {
                // Hide previous option
                if( currentOption !== undefined ) {
                    var jqOldCurrentOption = $(jqOptions.get(currentOption));
                    jqOldCurrentOption.removeClass("active_element");
                    jqOldCurrentOption.addClass("removed");
                }
                
                // Update current index
                currentOption = idx;
                
                // Show new option
                var jqNewCurrentOption = $(jqOptions.get(currentOption));
                jqNewCurrentOption.addClass("active_element");
                jqNewCurrentOption.removeClass("removed");
                
                // Show/hide next/prev buttons (and "or")
                if( currentOption == 0 ) {
                    jqPreOption.addClass("removed");
                } else {
                    jqPreOption.removeClass("removed");
                }
                
                if( currentOption == numOptions-1 ) {
                    jqNextOption.addClass("removed");
                    jqOrMessage.addClass("removed");
                } else {
                    jqNextOption.removeClass("removed");
                    jqOrMessage.removeClass("removed");
                }
                
                // Set popup background
                jqPopup.removeClass("multiple-first");
                jqPopup.removeClass("multiple-mid");
                jqPopup.removeClass("multiple-last");
                if( numOptions > 1 ) {
                    if( currentOption > 0 && currentOption < numOptions-1 ) {
                        jqPopup.addClass("multiple-mid");
                    } else if( currentOption == 0 ) {
                        jqPopup.addClass("multiple-first");
                    } else if( currentOption == numOptions-1 ) {
                        jqPopup.addClass("multiple-last");
                    }
                }

            }

        }
        
        jqNextOption.bind("tap click touchstart", function() {
            if( currentOption < numOptions-1 ) {
                setCurrentOption(currentOption+1);
            }
            allowGlow = false;
            return false;
        });
        
        jqPreOption.bind("tap click touchstart", function() {
            if( currentOption > 0 ) {
                setCurrentOption(currentOption-1);
            }
            allowGlow = false;
            return false;
        });
        
        
        jqPopup.append(jqNextOption);
        jqPopup.append(jqPreOption);
        jqPopup.append(jqOrMessage);
        
        // Initially show first option
        setCurrentOption(0);
        
        // Insert the popup
        setTimeout( function () { 
            //jqLine.after(jqPopup);
            ChapterObject.jqChapter.append(jqPopup);
            animateIn(jqPopup, 1);
        }, 200);

    }

    //------------------------------------------------------
    //
    //      What happens when you choose a replacement line
    //
    //------------------------------------------------------    

    var replacementChosen = function(jqLineToReplace, tagName, deleteOkay) {
        
        // tagName contains the tag for the replacement
        var newLineObject = ChapterObject.getLineObjectByTag(tagName);
        var numReplacements = 1;
        
        if (!newLineObject) {
            // we're removing this line (or the replacement failed, natch)
            if (!deleteOkay)
            {
                console.log("Null line replacement: " + tagName + ".");
                return;
            }
            
            animateAway(jqLineToReplace);
                
        } else {

            var jqNewLines = getLineAsJq(newLineObject);
            numReplacements = jqNewLines.length;
            /* it's an array so we can fade in! */
            for (var i = 0 ; i < numReplacements  ; i++)
            {
                if (i == 0)
                {
                    // fade out existing fragment
                    animateAway(jqLineToReplace);

                    // new line goes in its place
                    jqLineToReplace.replaceWith(jqNewLines[i]);
                } 
                else
                    jqNewLines[i].insertAfter(jqNewLines[i-1]);
                
                animateIn(jqNewLines[i], i+2);
            }
            
        }
        
        fade_all_popups();
        
        setTimeout( function () {
            // should we display the send message?
            if ( ChapterObject.chapterContainer.find('.final-false').length <= 0 && !ChapterObject.jqSendLetter) {
                ChapterObject.jqSendLetter = $('<div id="send-the-letter" class="continue invisible"></div>');                
                
                $('#header').append(ChapterObject.jqSendLetter);
                animateIn(ChapterObject.jqSendLetter, 4);
                bind_continue_to(thisChapter, nextChapter);        
            }
        }, 750 * (numReplacements + 1) );
    }

     //------------------------------------------------------
    //
    //      Transition animations are induced by CSS changes
    //
    //------------------------------------------------------  
    
    var setColour = function(jqElement, colour) {
        jqElement.removeClass("white");
        jqElement.removeClass("black");
        jqElement.removeClass("gray");
        jqElement.removeClass("darkslategray");
        jqElement.addClass(colour);
    }

    var animateIn = function(jqLine, speed) {
        jqLine.addClass("animate-speed-" + speed);
        
        // start the fade-in effect after a short delay
        // to allow the transition effect to be processed
        setTimeout( function () {  
            jqLine.removeClass("invisible");
            jqLine.addClass("visible");                    
        }, 250);


        setTimeout(function() { 
            // remove the transition effect once done
            jqLine.removeClass("animate-speed-" + speed);
        } , 750 * (speed + 1));
          
    }

    var animateAway = function(jqLine, slow) {                    
        if (!slow) {
            var delay = 1000;
            jqLine.addClass("fade-away");
        } else {
            var delay = 3000;
            jqLine.addClass("fade-away-slow");
        }    
        setTimeout( function () {
            jqLine.removeClass("visible"); 
            jqLine.addClass("invisible");
            setTimeout( function() { jqLine.remove(); }, delay);
        }, 250);
                  
    } 
 
 
     //------------------------------------------------------
    //
    //      What happens when you send a letter
    //
    //------------------------------------------------------    
   
    ChapterObject.solidify = function(chapterName) {


        chapterComplete(chapterName);
        
        var currentGameState = getSavedGameState();
        currentGameState[chapterName].lines = [];

        // UI stuff only. Transition to next chapter is handled in the Unlock func
        // turn off all links. Set the page down as a permanent document
        fade_all_popups();
                
        $(".line").each( function() { 
            var jqLine = $(this);
            jqLine.addClass("solid");
            jqLine.addClass("animateColor");
            jqLine.removeClass("active_sentence");
            jqLine.unbind("tap click touchstart"); 
            setColour(jqLine, "darkslategray");
            currentGameState[chapterName].lines.push(jqLine.data("text"));
        });
        
        var jqChap = $('.chapter');
        
        jqChap.unbind("click");
	    jqChap.get(0).removeEventListener("touchend", glow_active_text, false);       
	    jqChap.get(0).removeEventListener("touchmove", movingWindow, false);       

        var jqContainer = $('#container');
        jqContainer.addClass("complete");

        animateAway(ChapterObject.jqSendLetter);

    // only required with broken Local Storage       
        jqNextButton.show();
        
        writeSavedGameState(currentGameState);  
        
    }
    
    ChapterObject.rebuildSavedGameState = function(chapterName) {
        
        var currentGameState = getSavedGameState();
        var lineSet = currentGameState[chapterName].lines;

        var jqMainText = $('<div class="chapter"></div>');

        for (var i = 0 ; i < lineSet.length ; i++)
        {
            var jqLine = $('<div class="line content darkslategray solid"></div>');
            jqLine.html(lineSet[i]);
            jqLine.addClass("visible");
            jqMainText.append(jqLine);
        }
        
        jqMainText.append('<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>');


        var jqContainer = $('#container');
        jqContainer.addClass("complete");
        
        ChapterObject.chapterContainer.append(jqMainText);
        
        makeContentObject(chapterName);
        setSpeaker();
        
        return true;
        
    }
    
 
    //------------------------------------------------------
    //
    //      UI handlers
    //
    //------------------------------------------------------  
 
function fade_all_popups() {
    removeSentenceHighlight();
    removeGlowHighlight();
    inputLines = [];
}
function removeSentenceHighlight() {
    $('.popup').each(function () {
        animateAway($(this));
//          $(this).remove();
    });
    $('.highlight').each(function () {
        $(this).removeClass('highlight');
    });
}
function removeGlowHighlight() {
    highlight_on = false;
    $('.liveText').each(function () {
        var jqLine = $(this);
        jqLine.removeClass("liveText");
        jqLine.removeClass("animateColor");
//        setTimeout( function() {
            setColour(jqLine, "black");
//        }, 25);
    });
}
