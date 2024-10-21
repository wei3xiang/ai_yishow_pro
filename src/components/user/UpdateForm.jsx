const UpdateForm = ({ user }) => {
  console.log("====user: ", user);

  return `<div class="layui-form" style="padding: 20px;">
    <div class="layui-form-item">  
      <label class="layui-form-label">用户名</label>  
      <div class="layui-input-block">  
        <input type="text" name="username" value="${user.username}" class="layui-input">  
      </div>  
    </div>  
    <div class="layui-form-item">  
      <label class="layui-form-label">电子邮箱</label>  
      <div class="layui-input-block">  
        <input type="text" name="email" value="${user.email}" class="layui-input">  
      </div>  
    </div>  
    <div class="layui-form-item">  
      <label class="layui-form-label">角色</label>  
      <div class="layui-input-block">  
        <input type="text" name="role" value="${user.role}" class="layui-input">  
      </div>  
    </div>  
  </div>  
  <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
    <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
    <button class="layui-btn" id="modalOk">确定</button>
  </div>
  </div>`;
};
export default UpdateForm;
