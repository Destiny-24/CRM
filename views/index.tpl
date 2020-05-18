{% extends './layout.tpl' %}
    {% block css %}
    <link rel="stylesheet" href="/stylesheets/index.css"/> 
    <link rel="stylesheet" href="/stylesheets/style.css"/>
    {% endblock %}
{% block content %}
<div class="wrapper">
  <div class="form-section">
    <div class="form-title">全新梅赛德斯-AMG A 35 L <br>4MARTIC </div>
    <div class="form-item">
      <input  id="userName" type="text" class="form-input" placeholder="你的姓名"/>
    </div>
    <div class="form-item">
      <input  id="userPhone" type="text" class="form-input" placeholder="你的电话"/>
    </div>
    <div class="form-item">
      <button id="userSubmit" class="form-button">立即预约</button>
    </div>
  </div>
</div>
{% endblock %}

{% block js %}
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
<script src="/javascripts/index.js"></script>
{% endblock %}