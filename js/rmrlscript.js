jQuery(document).ready(function( $ ){

function AddReadMore() {
    //This limit you can set after how much characters you want to show Read More.
    var carLmt = 800;
    // Text to show when text is collapsed
    var readMoreTxt = " Read More";
    // Text to show when text is expanded
    var readLessTxt = " Read Less";


    //Traverse all selectors with this class and manupulate HTML part to show Read More
    $(".addReadMore").each(function() {
        if ($(this).find(".firstSec").length)
            return;

        var allstr = $(this).text();
        if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='SecSec' style='white-space: pre-line; '>" + secdHalf + "</span><span class='readMore'  title='Click to Show More' style='color:#F69548; cursor:pointer;'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less' style='color:#F69548; cursor:pointer;'>" + readLessTxt + "</span>";
            $(this).html(strtoadd);
        }

    });
    //Read More and Read Less Click Event binding
    $(document).on("click", ".readMore,.readLess", function() {
        $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
    });
}
$(function() {
    //Calling function after Page Load
    AddReadMore();
});

function AddReadMoreInfra() {
             //This limit you can set after how much characters you want to show Read More.
             var carLmt = 500;
             // Text to show when text is collapsed
             var readMoreTxt = " Read More";
             // Text to show when text is expanded
             var readLessTxt = " Read Less";
         
         
             //Traverse all selectors with this class and manupulate HTML part to show Read More
             $(".addReadMoreInfra").each(function() {
                 if ($(this).find(".firstSec").length)
                     return;
         
                 var allstr = $(this).text();
                 if (allstr.length > carLmt) {
                     var firstSet = allstr.substring(0, carLmt);
                     var secdHalf = allstr.substring(carLmt, allstr.length);
                     var strtoadd = firstSet + "<span class='SecSec' style='white-space: pre-line; '>" + secdHalf + "</span><span class='readMore'  title='Click to Show More' style='color:#ffffff; cursor:pointer; font-weight:bold'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less' style='color:#ffffff; cursor:pointer; font-weight:bold'>" + readLessTxt + "</span>";
                     $(this).html(strtoadd);
                 }
         
             });
             //Read More and Read Less Click Event binding
             $(document).on("click", ".readMore,.readLess", function() {
                 $(this).closest(".addReadMoreInfra").toggleClass("showlesscontent showmorecontent");
             });
         }
$(function() {
             //Calling function after Page Load
             AddReadMoreInfra();
         });
         
 function AddReadMoreCareer() {
    //This limit you can set after how much characters you want to show Read More.
    var carLmt = 450;
    // Text to show when text is collapsed
    var readMoreTxt = " Read More";
    // Text to show when text is expanded
    var readLessTxt = " Read Less";


    //Traverse all selectors with this class and manupulate HTML part to show Read More
    $(".addReadMoreCareer").each(function() {
        if ($(this).find(".firstSec").length)
            return;

        var allstr = $(this).text();
        if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='SecSec' style='white-space: pre-line; '>" + secdHalf + "</span><span class='readMore'  title='Click to Show More' style='color:#F69548; cursor:pointer;'>" + readMoreTxt + "</span><span class='readLess' title='Click to Show Less' style='color:#F69548; cursor:pointer;'>" + readLessTxt + "</span>";
            $(this).html(strtoadd);
        }

    });
    //Read More and Read Less Click Event binding
    $(document).on("click", ".readMore,.readLess", function() {
        $(this).closest(".addReadMoreCareer").toggleClass("showlesscontent showmorecontent");
    });
}
$(function() {
    //Calling function after Page Load
    AddReadMoreCareer();
});

});