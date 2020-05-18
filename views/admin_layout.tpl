<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>后台管理系统</title>
    <link rel="stylesheet" href="/stylesheets/admin.css"/>
    {% block css %}
    {% endblock %}
</head>
<body>
  <div class="wrapper">
    <div class="page-header">
      <div id="header-users" class="header-user">当前用户:</div>
      <a class="header-quit" href="/admin/login">
      <button id="quit">退出</button>
      </a>
    </div>
    <div class="page-body">
      <div class="page-aside">
        <nav class="page-nav">
          <ul>
          {% if userInfo.role == 1 %}
            <li>
              <a class="page-nav-item" href="/admin/user">人员管理</a>
            </li>
          {% endif %}
            <li>
              <a class="page-nav-item" href="/admin/clue">线索管理</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="page-content">
        {% block content %}
        {% endblock %}
      </div>
    </div>
  </div>

    {% block js %}
    <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
    <script src="/javascripts/users_id.js"></script>
    {% endblock %}
</body>
</html>