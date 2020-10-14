$(function(){
    //--- Menu ---//

    var isOpen = false

    $('.menu-btn').on('click',function(){

        $(this).addClass('open')
        $('.mobile-nav').addClass('open')
    
        isOpen = true

    }) 

    $('.mobile-nav').on('click',function(){
        
        $('.mobile-nav').removeClass('open')
        $('.menu-btn').removeClass('open')
                        
        isOpen = false
    })

})