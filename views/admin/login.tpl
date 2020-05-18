{% extends './../layout.tpl' %}

{% block css %}

<link rel="stylesheet" href="/stylesheets/login.css"/>
{% endblock %}


{% block content %}
<div class="wrapper">
  <div class="form-section">
    <div class="form-title">管理系统后台登录</div>
    <div class="form-item">
      <input id="userPhone" type="text" class="form-input" placeholder="手机号"/>
    </div>
    <div class="form-item">
      <input id="userPassword" type="password" class="form-input" placeholder="密码"/>
    </div>
    <div class="form-item">
      <button id="userSubmit" class="form-button">登录</button>
    </div>
  </div>
</div>
{% endblock %}

{% block js %}
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
<script src="/javascripts/login.js"></script>
{% endblock %}