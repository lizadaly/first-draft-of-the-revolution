

// -----------------------------------------------------------------------
// Click handler function object that 
// makes a div scrollable
// -----------------------------------------------------------------------
var DragScrollable = function(jqScrollableElement) {
    
    var lastY = 0;
    var deltaY = 0;
    var initialY = 0;
    var relativePosY = 0;
    var cssRelativePosY = 0;
    var viewHeight = $('#chapter_container').height();
    var contentHeight = $('.chapter').height();

    function constrainScrollPos(pos) {
        
        if (  pos > 0 ) {
            // disallow scrolling below top
            return 0;
        }
        else {
            // does the content underflow? scroll to the top
            if (viewHeight > contentHeight)
                return 0;
            
            // is the scrolled amount larger than the 
            // height of the overflowing content?
            // Remembering that both are -ve!!
            if ( pos < viewHeight - contentHeight ) 
                return viewHeight - contentHeight;
        }
        return pos;
    }
    
    function dragStart(e) {
    
        if (e.touches){  
            var touch = e.touches[0]; // Get the information for finger #1
        }
        else {
            var touch = e;
        }  
 
        if (webVersion) {
            // update view height (web only)
            viewHeight = $('#chapter_container').height();   
        }
        
        

        // always recalculate the content height, as this changes
        contentHeight = $('.chapter').height();
        
        // Prepare for mouse movement
        jqScrollableElement.get(0).addEventListener("touchmove", dragTick, false);
        
        jqScrollableElement.bind("mousemove", dragTick);

        initialY = cssRelativePosY;

        lastY = touch.screenY;
        
        deltaY = 0;

        jqScrollableElement.get(0).addEventListener("touchend", dragEnd, false);      
        jqScrollableElement.get(0).addEventListener("touchcancel", dragEnd, false);      

        $(document).bind("mouseup",  dragEnd);
      
        e.preventDefault();
        return false;
    }
    
    
    function dragTick(e) {
    
        if (e.touches){  
            var touch = e.touches[0]; // Get the information for finger #1
        }
        else {
            var touch = e;
        }

        // Get current position
        var prevY = lastY;    
        
        lastY = touch.screenY;
        
        var newDeltaY = lastY - prevY;        

        var lerp = 0.5;
        
        deltaY = (1.0-lerp)*deltaY + lerp*(newDeltaY);
        
        relativePosY = relativePosY + newDeltaY;
                
        if (webVersion || Math.abs(cssRelativePosY - relativePosY) > 0) {
            jqScrollableElement.scrollTop(-relativePosY);
            cssRelativePosY = relativePosY;
        }
        
        if (Math.abs(cssRelativePosY - initialY) > 3) {
            allowGlow = false;
            removeGlowHighlight();
        }
        
        
        e.preventDefault();
        return false;
    }
    
    function dragEnd (e) {
        
     //   relativePosY = constrainScrollPos(relativePosY + deltaY * 20);
        cssRelativePosY = relativePosY;
       
        // Animate a sliding effect after you
        // release the mouse button
  //          jqScrollableElement.scrollTop(-relativePosY);
//        jqScrollableElement.css('-webkit-transform', 'translate(0px, ' + relativePosY + 'px)');
			
        jqScrollableElement.removeAttr('ontouchend');
        jqScrollableElement.removeAttr('ontouchmove');
        jqScrollableElement.removeAttr('ontouchcancel');
        jqScrollableElement.unbind('mouseup');
        jqScrollableElement.unbind('mousemove');

        e.preventDefault();
    }
        
    // Hook up the event handler
    jqScrollableElement.get(0).addEventListener("touchstart", dragStart, false);      

    jqScrollableElement.bind("mousedown", function (event) {
        dragStart(event);
    });
}