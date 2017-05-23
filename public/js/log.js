$(document).ready(function(){
    $('#save').on('click',function(){
        $('#successMsg').slideDown();
        setTimeout(function(){
            $('#successMsg').slideUp();
        },1000);
    })
})
