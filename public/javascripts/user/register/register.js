// 注册

(function(){

  $('.submit').on('click',function(){
    $.ajax({
      url:'/admin/register',
      type:'post',
      success:function(json){
        
      }
    });
  });
})();
