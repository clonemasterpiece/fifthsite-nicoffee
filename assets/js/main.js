window.onload = function(){

    var nizRadio = ["Espresso","Ness Coffee","Nespresso","Brazilian mix", "No coffein espresso"];
    var ispis = `<select>
                    <option value="0" >Choose coffee type</option>`;
    
                    nizRadio.forEach(function(el){
                        ispis+= `<option value="${el}">${el}</option>`
                    });
        ispis+="</select>";

        document.getElementById("kafeIspis").innerHTML = ispis;

        // prikazivanje checkboxova ako je Sugar na YES :)
        
        document.getElementById("promena").addEventListener('change', function(){
            
            var nizSecer = document.getElementsByName("sugar");
           if(nizSecer[1].checked){
               
            document.querySelector("#sugarType").classList.add("sakriven");
           } else {
            
            document.querySelector("#sugarType").classList.remove("sakriven");
           }

           
           
            
        });

        $('#goToOrigin').click(function(e){
            e.preventDefault();
    
            $('html').animate({
                scrollTop: $('#origin').offset().top}, 2500);
            
        });
        $('#goToNews').click(function(e){
            e.preventDefault();
    
            $('html').animate({
                scrollTop: $('#news').offset().top}, 2500);
            
        });
        $('#goToForm').click(function(e){
            e.preventDefault();
    
            $('html').animate({
                scrollTop: $('#forma').offset().top}, 2500);
            
        });
       
        
       document.querySelector(".dugme").addEventListener('click',function(e){
           e.preventDefault();

        var nizGreske = [];

        var reImePrezime = /^[A-Z][a-z]{2,11}(\s[A-Z][a-z]{2,15})+$/;
        var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var rePhone = /^06[\d]\-[\d]{3}\-[\d]{3,4}$/;

        var imePrezime = document.getElementById("imeId").value;
        var email = document.getElementById("emailId").value;
        var phone =document.getElementById("phoneId").value;

        var greskaIme = document.getElementById("imeId");
        var greskaEmail = document.getElementById("emailId");
        var greskaPhone = document.getElementById("phoneId");

        
        if(!reImePrezime.test(imePrezime)){
            greskaIme.style.border ="2px solid red";
        }else{
            greskaIme.style.border ="";
        };

        if(!reEmail.test(email)){
            greskaEmail.style.border ="2px solid red";
        } else {
            greskaEmail.style.border ="";
        };

        if(!rePhone.test(phone)){
            greskaPhone.style.border ="2px solid red";
        } else {
            greskaPhone.style.border ="";
        }
    });

    $(".link").hover(function(){
        $(this).animate({
            color: '#fff',
            fontSize: '+=10px'
          }, 1000);
        },function(){
            $(this).animate({ fontSize: '20px'}, 1000);
        });
        
    $(window).scroll(function(){

        var skrolovano = $(this).scrollTop();

        if(skrolovano > 300){
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }

    });
    $('#scrollToTop').click(function(){

        
        $('html').animate({
            scrollTop: 0
        }, 1500);
    });
    $('#scrollToTop1').click(function(){

        
        $('html').animate({
            scrollTop: 0
        }, 1500);
    });


    
}