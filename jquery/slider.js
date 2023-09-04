/* for next slides */
$(".right").click(function()
{
    if($(".slide.active").next(".slide").length!=0)                     /* for slides 1 to 3 */
    {
        // $(".slide.active").hide(2000).removeClass("active").next(".slide").show(2000).addClass("active")
        $(".slide.active").fadeOut(2000).removeClass("active").next(".slide").fadeIn(2000).addClass("active")
        $("li.dt").removeClass("dt").next("li").addClass("dt")
    }
    else                                                                 /* to go from 3rd slide to 1st slide */
    {
        $(".slide.active").fadeOut(2000).removeClass("active");
        $(".slide:first").fadeIn(2000).addClass("active")
        $("li.dt").removeClass("dt");
        $("li:first").addClass("dt")
    }

    /* $(".slide.active") :- for current slide */
})

/* for previous slides */
$(".left").click(function()
{
    if($(".slide.active").prev(".slide").length!=0)                     /* for slides 3 to 1 */
    {
        $(".slide.active").fadeOut(2000).removeClass("active").prev(".slide").fadeIn(2000).addClass("active")
        $("li.dt").removeClass("dt").prev("li").addClass("dt")
    }
    else                                                                 /* to go from 1st slide to 3rd slide */
    {
        $(".slide.active").fadeOut(2000).removeClass("active");
        $(".slide:last").fadeIn(2000).addClass("active")
        $("li.dt").removeClass("dt");
        $("li:last").addClass("dt")
    }
})

/* for autoplay slides */
function autoplay()
{
    if($(".slide.active").next(".slide").length!=0)                     /* for slides 1 to 3 */
    {
        $(".slide.active").fadeOut(2000).removeClass("active").next(".slide").fadeIn(2000).addClass("active")
        $("li.dt").removeClass("dt").next("li").addClass("dt")
    }
    else                                                                 /* to go from 3rd slide to 1st slide */
    {
        $(".slide.active").fadeOut(2000).removeClass("active");
        $(".slide:first").fadeIn(2000).addClass("active")
        $("li.dt").removeClass("dt");
        $("li:first").addClass("dt")
    }
    
    setTimeout(function(){
        autoplay()
    },2000)
}

setTimeout(function(){
    autoplay()
},2000)