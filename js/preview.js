var timer_to_delay_display;
var timer_to_delay_disapper;

$(document).ready(function(){

      var link;
      $("a").hover(
        function(){
          link = $(this);
          delay_to_display_popup(link);
          

        },
        function(event){
          clearTimeout(timer_to_delay_display);
          $('#iframe').hover(
            function(){clearTimeout(timer_to_delay_disapper);},
            function(){
              $('#iframe').remove();
            });
                   
        delay_popup_disapper();
      });
      

  
    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        $('#iframe').remove();
      }
    });

});

function delay_to_display_popup(link)
{
    timer_to_delay_display = setTimeout(function(){display_popup(link);},500);
}

function delay_popup_disapper()
{
    timer_to_delay_disapper = setTimeout(function(){$('#iframe').remove();},350);
}

function display_popup(link)
{
    href = link.attr('href');
    url = document.URL;
    // alert(url);
    
    // for now it's not work on stack overflow
    
    if (url.indexOf("stackoverflow.com") != -1) {
        return false;
    }
    
     
    if (!href.match('javascript:')) {
        $('#iframe').remove();
        
        
        // set width and height according to different website
        if (url.indexOf("answers.yahoo.com") != -1) {
            link.after('<div id="preview"><a href="'+href+'"></a><div class="notice">Press escape to close</div><iframe id="iframe" src='+href+' style="width:160%;height:550%;border:4px outset #5369E6;"></iframe></div>');
        } else if (url.indexOf("reddit.com") != -1) {
            link.after('<div id="preview"><a href="'+href+'"></a><div class="notice">Press escape to close</div><iframe id="iframe" src='+href+' style="width:99%;height:100%;border:4px outset #5369E6;"></iframe></div>');
            $('#iframe').css('background-color', 'white');
        } else if (url.indexOf("techcrunch.com") != -1) {
            link.after('<div id="preview"><a href="'+href+'"></a><div class="notice">Press escape to close</div><iframe id="iframe" src='+href+' style="width:100%;min-height:200%;border:4px outset #5369E6;"></iframe></div>');
        } else if(url.indexOf("youtube.com") != -1) {
            link.after('<div id="preview"><a href="'+href+'"></a><div class="notice">Press escape to close</div><iframe id="iframe" src='+href+' style="width:100%;height:200%;border:4px outset #5369E6;"></iframe></div>');
            $('#iframe').css('top', 0);
        } else {
            link.after('<div id="preview"><a href="'+href+'"></a><div class="notice">Press escape to close</div><iframe id="iframe" src='+href+' style="width:100%;height:100%;border:4px outset #5369E6;"></iframe></div>');
        }
        
        //}
        /*
        $('#preview').css('left', 100);
        $('#preview').css('right', event.pageY-100);
        $('#preview').css('display', 'block');
        $('#preview').css('position', 'absolute');
        $('#preview').css('margin', -100);
        */
        /*  in style.css
        $('#iframe').css('position', 'absolute');
        $('#iframe').css('z-index', 100000000);
        $('#iframe').css('left', 0);
        */


    }
    return false;
}