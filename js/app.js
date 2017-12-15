$(document).foundation()
$(function(){
    $("#cookie_img").on({
        mouseenter: function(){
            $(this).attr('src','img/cookie_on.jpg');
          
        },
        mouseleave: function(){
            $(this).attr('src','img/cookie_off.jpg');
        }
    });
    $("#sparkle_img").on({
        mouseenter: function(){
            $(this).attr('src','img/sparkle_on.jpg');
          
        },
        mouseleave: function(){
            $(this).attr('src','img/sparkle_off.jpg');
        }
    });
    $("#cocoa_img").on({
        mouseenter: function(){
            $(this).attr('src','img/cocoa_on.jpg');
          
        },
        mouseleave: function(){
            $(this).attr('src','img/cocoa_off.jpg');
        }
    });
    $("#present_img").on({
        mouseenter: function(){
            $(this).attr('src','img/present_on.jpg');
          
        },
        mouseleave: function(){
            $(this).attr('src','img/present_off.jpg');
        }
    });
    $("#pinecone_img").on({
        mouseenter: function(){
            $(this).attr('src','img/pinecone_on.jpg');
          
        },
        mouseleave: function(){
            $(this).attr('src','img/pinecone_off.jpg');
        }
    });
    $("#sweater_img").on({
        mouseenter: function(){
            $(this).attr('src','img/sweater_on.jpg');
          
        },
        mouseleave: function(){
            $(this).attr('src','img/sweater_off.jpg');
        }
    });
});