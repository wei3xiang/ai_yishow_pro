const UpdateForm = ({ aiUser }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">用户名</label>  
      <div class="layui-input-block">  
        <input type="text" name="username" value="${aiUser.username}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">密码</label>  
      <div class="layui-input-block">  
        <input type="text" name="password" value="${aiUser.password}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">邮箱</label>  
      <div class="layui-input-block">  
        <input type="text" name="email" value="${aiUser.email}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">电话</label>  
      <div class="layui-input-block">  
        <input type="text" name="phone" value="${aiUser.phone}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">地址</label>  
      <div class="layui-input-block">  
        <input type="text" name="address" value="${aiUser.address}" class="layui-input">  
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
