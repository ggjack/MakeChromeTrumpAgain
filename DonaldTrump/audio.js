$(window).click(function(){
        var audio = new Audio();
        var randum = Math.floor(Math.random() * (10)) + 1;
        if(randum == 1)
        {
            audio.src = "img/solidperson.wav"
        }
        else if(randum == 2)
        {
            audio.src = "img/idealwiththechinese.wav"
        }
        else if(randum == 3)
        {
            audio.src = "img/worstpresident.mp3"
        }
        else if(randum == 4)
        {
            audio.src = "img/boardroom.mp3"
        }
        else if(randum == 5)
        {
            audio.src = "img/smallLoan.wav"
        }
        else if(randum == 6)
        {
            audio.src = "img/stupidPeople.wav"
        }
        else if(randum == 7)
        {
            audio.src = "img/needWall.wav"
        }
        else if(randum == 8)
        {
            audio.src = "img/mexicoChina.wav"
        }
        else if(randum == 8)
        {
            audio.src = "img/mexicoChina.wav"
        }
        else if(randum == 9)
        {
            audio.src = "img/seriously.wav"
        }
        else if(randum == 9)
        {
            audio.src = "img/toHell.wav"
        }
        audio.play();
                 });
