$(function (){
   nbrFormItem = $('.form_wizard .form_item').length;
   nbrStep = 0;
   $('.form_wizard footer .nxt_step').click(function (){
        if(nbrStep < nbrFormItem-1)
            nbrStep = nbrStep + 1;
        $('.form_wizard .form_item:visible').hide();
        $('.form_wizard .form_item').eq(nbrStep).fadeIn('slow');
   });
   
   $('.pre_step').click(function (){
       if(nbrStep > 0)
            nbrStep = nbrStep - 1;
        $('.form_wizard .form_item:visible').hide();
        $('.form_wizard .form_item').eq(nbrStep).fadeIn('slow');
   });
});