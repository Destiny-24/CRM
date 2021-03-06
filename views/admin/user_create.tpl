{% extends './../admin_layout.tpl' %}


{% block content %}
<div class="content-title">新增人员</div>
<div class="content-control">
  <a href="/admin/user">返回用户列表 >></a>
</div>
<div class="form-section">
  <div class="form-item">
    <input  id="userName" type="text" class="form-input" placeholder="姓名"/>
  </div>
  <div class="form-item">
    <input  id="userPhone" type="text" class="form-input" placeholder="电话"/>
  </div>
  <div class="form-item">
    <input  id="userPassword" type="text" class="form-input" placeholder="密码"/>
  </div>
  <div class="form-item">
    <select id="userRole" class="form-input">
      <option value="0">请选择角色</option>
      <option value="1">管理员</option>
      <option value="2">销售</option>
    </select>
  </div>
  <div class="form-item">
    <button id="userSubmit" class="form-button">新增</button>
  </div>
</div>

{% endblock %}

{% block js %}
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
<script src="/javascripts/user_create.js"></script>
{% endblock %}