// 注册

(function(){


  $('input[name=tel]').on('input',() => {
      var tel = $(this).val();
      data = {
        tel:tel
      };
      $.ajax({
        url:'/admin/isExist',
        type:'get',
        data:data,
        dataType:'json',
        success:function(json){
          console.log(json);
        }
      });
  });

  $('.submit').on('click',function(){

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
        console.log(json);
      }
    });
  });
})();
