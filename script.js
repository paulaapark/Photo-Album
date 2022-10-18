$(document).ready(function () {
// i liked the thumbnail look better so i turned off the border function
    //$('.grid-border').css('border-style', 'solid').css('border-radius', '20px').css('border-color', 'rgba(255, 255, 255, 0.521)').css('border-width', '1px');

    let username = $('#username').val();
    let image_title = $('#image-title').val();
    let comment = $('#comment').val();
    

    $('#username').on('input', function(){
        let username = $('#username').val();
            if(username.length < 6 && username.length >= 1){
                $('#validate-username').html('*Username must be at least 6 characters.').css('color', 'red');
            }else if (username.length >= 6){
                $('#validate-username').html('Looks good!').css('color', 'green');
            }
    });

    $('#username').focusout(function(){
        let username = $('#username').val();
            if(username.length < 6 && username.length >= 1){
                $('#validate-username').html('*Username must be at least 6 characters.').css('color', 'red');
            }else if (username.length >= 6){
                $('#validate-username').html('Looks good!').css('color', 'green');
            }
    });


    // $('#username').on('input', function(){
    //     $(this).each(function(){
    //         if(username.length < minlength && username.length >= 1){
    //             $('#validate-username').html('*Username must be at least 6 characters.').css('color', 'red');
    //         }else if (username.length >= minlength){
    //             $('#validate-username').html('Looks good!').css('color', 'green');
    //         }
    //     });
    // });

    // $('input[name=username]').on('input', function(){
    //     ('input[name=username]').each(function(){
    //         if(username.length < minlength && username.length >= 1){
    //             $('#validate-username').html('*Username must be at least 6 characters.').css('color', 'red');
    //         }else if (username.length >= minlength){
    //             $('#validate-username').html('Looks good!').css('color', 'green');
    //         }
    //     });
    // });


    // $('#username').focusin(function(){
    //     if(username.length < 6 && username.length >= 1){
    //         $('#validate-username').html('*Username must be at least 6 characters.').css('color', 'red');
    //     }else if (username.length >= 6){
    //         $('#validate-username').html('Looks good!').css('color', 'green');
    //     }
    // });
    
    
    // $('#username').focusout(function(){
    //     if (username === '') {
    //         $('#validate-username').html('*Required').css('color', 'red'); 
    //     }else if(username.length < 6  && username.length >= 1){
    //         $('#validate-username').html('*Username must be at least 6 characters.').css('color', 'red');
    //     }else if (username.length >= 6){
    //         $('#validate-username').html('Looks good!').css('color', 'green');
    //     }
    // });
    

    
    $('#image-title').focusout(function(){
        if (image_title === '') {
            $('#validate-image-title').html('*Required').css('color', 'red');   
        }
    });

    $('#comment').focusout(function(){
        if (comment === '') {
            $('#validate-comment').html('*Required').css('color', 'red');   
        }
    }); 
    



    $('#submit_btn').click(function(){ 

        let username = $('#username').val();
        let image_title = $('#image-title').val();
        let comment = $('#comment').val();

        if (username === '') {
            $('#validate-username').html('*Required').css('color', 'red'); 
        }else if(username.length < 6 && username.length >= 1){
            $('#validate-username').html('*Username must be at least 6 characters.').css('color', 'red');
        }else if (username.length >= 6){
            $('#validate-username').html('Looks good!').css('color', 'green');
        }
    
        if (image_title === '') {
            $('#validate-image-title').html('*Required').css('color', 'red');   
        }
    
        if (comment === '') {
            $('#validate-comment').html('*Required').css('color', 'red');
        }
    });

    
    
});


    

    // $('#username').focus(function(){
    //     let username = $('#username').val();
    //     if (username === '') {
    //         $('#validate-username').html('*Username must be at least 6 characters.').css('color', 'red');
    // }else if (username.length > 6) {
    //         $('#validate-username').html('Looks good!').css('color', 'green');
    //     }})   










//this doesn't work
// function validate() {
//     let username = $('#username').val();
//     let image_title = $('#image-title').val();
//     let comment = $('#comment').val();
    
//     let form = [username, image_title, comment];

//     for (let i = 0; i < form.length; i++){
//         if (form[i] = "" && i = 0){
//             $('#validate-username').html('*Required').css('color', 'red');
//         }else if(form[i] != "" && i = 0 && username.length < 6){
//             $('#validate-username').html('*Username must be at least 6 characters.').css('color', 'red');
//         }else if(form[i] = "" && i = 1){
//             $('#validate-image-title').html('*Required').css('color', 'red');
//         }else if(form[i] = "" && i = 2){
//             $('#validate-comment').html('*Required').css('color', 'red');
//         }
//     }

//     return;
