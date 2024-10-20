import React, { useState } from "react";

const initialUsers = [
  { id: 1, username: "user1", email: "user1@example.com", role: "admin" },
  { id: 2, username: "user2", email: "user2@example.com", role: "user" },
  { id: 3, username: "user3", email: "user3@example.com", role: "user" },
];

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(initialUsers);

  const filteredUsers = users.filter(
    (user) =>
      user.username.includes(searchTerm) || user.email.includes(searchTerm)
  );

  const handleShowModal = (user, editMode) => {
    const isEdit = editMode ? "" : "readonly";
    const modalContent = `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">用户名</label>  
          <div class="layui-input-block">  
            <input type="text" name="username" value="${
              user.username
            }" class="layui-input" ${isEdit}>  
          </div>  
        </div>  
        <div class="layui-form-item">  
          <label class="layui-form-label">电子邮箱</label>  
          <div class="layui-input-block">  
            <input type="text" name="email" value="${
              user.email
            }" class="layui-input" ${isEdit}>  
          </div>  
        </div>  
        <div class="layui-form-item">  
          <label class="layui-form-label">角色</label>  
          <div class="layui-input-block">  
            <input type="text" name="role" value="${
              user.role
            }" class="layui-input" ${isEdit}>  
          </div>  
        </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        ${
          editMode ? '<button class="layui-btn" id="modalOk">确定</button>' : ""
        }  
      </div>  
    `;

    layui.layer.open({
      type: 1,
      title: editMode ? "编辑用户" : "查看用户",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        if (editMode) {
          layero.find("#modalOk").on("click", () => {
            const updatedUser = {
              ...user,
              username: layero.find('input[name="username"]').val(),
              email: layero.find('input[name="email"]').val(),
              role: layero.find('input[name="role"]').val(),
            };
            setUsers(
              users.map((u) => (u.id === updatedUser.id ? updatedUser : u))
            );
            layui.layer.close(index);
          });
        }
      },
    });
  };

  const handleShowDeleteModal = (user) => {
    const modalContent = `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">用户名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${user.username}" class="layui-input" readonly>  
          </div>  
        </div>  
        <div class="layui-form-item">  
          <label class="layui-form-label">电子邮箱</label>  
          <div class="layui-input-block">  
            <input type="text" value="${user.email}" class="layui-input" readonly>  
          </div>  
        </div>  
        <div class="layui-form-item">  
          <label class="layui-form-label">角色</label>  
          <div class="layui-input-block">  
            <input type="text" value="${user.role}" class="layui-input" readonly>  
          </div>  
        </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px;">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn layui-btn-danger" id="modalOk">确定</button>  
      </div>  
    `;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setUsers(users.filter((u) => u.id !== user.id));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleAddUser = () => {
    const newUser = { id: users.length + 1, username: "", email: "", role: "" };
    const modalContent = `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">用户名</label>  
          <div class="layui-input-block">  
            <input type="text" name="username" placeholder="请输入用户名" class="layui-input">  
          </div>  
        </div>  
        <div class="layui-form-item">  
          <label class="layui-form-label">电子邮箱</label>  
          <div class="layui-input-block">  
            <input type="text" name="email" placeholder="请输入电子邮箱" class="layui-input">  
          </div>  
        </div>  
        <div class="layui-form-item">  
          <label class="layui-form-label">角色</label>  
          <div class="layui-input-block">  
            <input type="text" name="role" placeholder="请输入角色" class="layui-input">  
          </div>  
        </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px;">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>  
      </div>  
    `;

    layui.layer.open({
      type: 1,
      title: "新增用户",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const username = layero.find('input[name="username"]').val();
          const email = layero.find('input[name="email"]').val();
          const role = layero.find('input[name="role"]').val();
          if (username && email && role) {
            setUsers([...users, { ...newUser, username, email, role }]);
            layui.layer.close(index);
          } else {
            layui.layer.msg("请填写完整信息", { icon: 5 });
          }
        });
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="layui-panel">
        <div
          className="layui-form"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <div className="layui-form-item" style={{ flex: "1" }}>
            <input
              type="text"
              placeholder="输入用户名或电子邮箱"
              className="layui-input"
              style={{ boxShadow: "none", borderRadius: "0", border: "none" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="layui-btn" onClick={() => setSearchTerm("")}>
            重置
          </button>
          <button
            className="layui-btn layui-btn-normal"
            onClick={handleAddUser}
          >
            新增
          </button>
        </div>
      </div>

      <table
        className="layui-table"
        style={{ border: "none", backgroundColor: "transparent" }}
      >
        <thead>
          <tr>
            <th>用户名</th>
            <th>电子邮箱</th>
            <th>角色</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => handleShowModal(user, false)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => handleShowModal(user, true)}
                >
                  编辑
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => handleShowDeleteModal(user)}
                >
                  删除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
