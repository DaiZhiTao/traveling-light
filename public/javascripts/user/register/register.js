// 注册

$(function(){
  $('input.tel').on('input',() => {
      var data = {};
          data.telphone = $('.tel').val();
      if(data.telphone.length == 11){
        $.ajax({
          url:'/admin/isExist',
          type:'get',
          data:data,
          dataType:'json',
          success:function(json){
            console.log(json);
          }
        });
      }
  });

  $('.submit').on('click',() => {

    var data = {};
    // 获取表单数据
    $('form').serializeArray().forEach((item, index) => {
      data[item.name] = item.value;
    });

    $.ajax({
      url:'/admin/register',
      type:'post',
      data: data,
      dataType: 'json',
      success:function(json){
        if(json && json.errno){
          
        }
      }
    });
  });
});
