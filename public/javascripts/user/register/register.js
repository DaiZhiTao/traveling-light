// 注册

(function(){

  $('.submit').on('click',function(){

    var data = {};
    // 获取表单数据
    $('form').serializeArray().forEach((item, index) => {
      data[index] = item;
    });

    $.ajax({
      url:'/admin/register',
      type:'post',
        data: data,
      dataType: 'json',
      success:function(json){
        console.log(json);
      }
    });
  });
})();
