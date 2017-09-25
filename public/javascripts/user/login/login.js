// 登录
$(function(){

  // 登录按钮点击
  $('.login-btn').click(function(){
    var data = $('.login-form').serialize();
    console.log(data);

    // 异步登录
    $.ajax({
      url:'/loign',
      type:'post',
      data: data,
      success: function(json){

      }
    })
  });
});
