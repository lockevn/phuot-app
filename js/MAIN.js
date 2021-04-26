(function () {
    
    window.onload = function () {
        $('#btnAddVoice').on('click', function AddVoice() {
            var ret = confirm('speak to me');
            if (ret) {
                $('#lblAudioNote').show();
            }
        });

        $('#btnAddPhoto').on('click', function AddPhoto() {
            var ret = confirm('open select one photo intent');
            if (ret) {
                $('#mockpickphotointent').show();
                $('#main').hide();
            }
        });


        $('#btnCancelAudioNode').on('click', function() {
            $('#lblAudioNote').hide();
        });
        $('#btnCancelPhotoNode').on('click', function () {
            $('#lblPhotoNote').hide();
        });

        

        $('#mockpickphotointent').on('click', function () {
            $(this).hide();
            $('#main').show();
            $('#lblPhotoNote').show();
        });
        

        // $message.html('running as <strong></strong>');
        
        setTimeout(function () {
            window.scrollTo(0, 1);
        }, 1);
        
    };
})();

