const PAGE = {
  init: function() {
    this.bind();
  },
  bind: function() {
    $('#userSubmit').bind('click',this.handleSubmit);
  },
  handleSubmit: function() {
    let name = $('#userName').val();
    let phone = $('#userPhone').val();
    let password = $('#userPassword').val();
    let role = $('#userRole').val();
    role = Number(role)
    if(!name){
      alert('请输入姓名');
      return
    }
    if(!password){
      alert('请输入密码');
      return
    }
    if(!(/^1[3456789]\d{9}$/.test(phone))){
      alert('手机号错误，请重新输入');
      return
    }
    if(!role){
      alert('请选择角色');
      return
    }

    $.ajax({
        url: '/api/user',
        data: { name, phone, password, role },
        type: 'POST',
        beforeSend: function() {
          $("#userSubmit").attr("disabled",true);
        },
        success: function(data) {
          if(data.code === 200){
            alert('新增成功！')
            location.href = '/admin/user'
          }else{
            alert(data.message)
          }
        },
        error: function(err) {
          console.log(err)
        },
        complete: function() {
          $("#userSubmit").attr("disabled",false);
        }
    })
  }
}

PAGE.init();