const PAGE = {
  init: function() {
    this.bind();
  },
  bind: function() {
    $('#userSubmit').bind('click',this.handleSubmit);
  },
  handleSubmit: function() {
    let phone = $('#userPhone').val();
    let password = $('#userPassword').val();
    if(!phone||!password){
      alert('请输入必要参数');
      return
    }
    $.ajax({
        url: '/api/login',
        data: { password, phone },
        type: 'POST',
        beforeSend: function() {
          $("#userSubmit").attr("disabled",true);
        },
        success: function(data) {
          if(data.code === 200){
            alert('登录成功！')
            let data_name = data.name;
            let data_role = data.role;
            localStorage.setItem('name',data_name);
            localStorage.setItem('role',data_role);
            if(data_role ==1){
               location.href = '/admin/user'
            }else{
              location.href = '/admin/clue'
            }
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