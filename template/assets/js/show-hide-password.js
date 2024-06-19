$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "bx bxs-hide" );
            $('#show_hide_password i').removeClass( "bx bxs-show" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "bx bxs-hide" );
            $('#show_hide_password i').addClass( "bx bxs-show" );
        }
    });
});