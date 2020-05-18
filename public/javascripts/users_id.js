const PAGE={
  init:function(){
    this.bind()
    this.name()
  },
  bind:function(){
    $('#quit').on('click',this.clickQuit);
  },
  name:function(){
    let userName=localStorage.getItem('name')
    $("#header-users").append(userName);
  },
  clickQuit:function(){
    　localStorage.removeItem("name");　
      localStorage.removeItem("role");
  }
}
PAGE.init();