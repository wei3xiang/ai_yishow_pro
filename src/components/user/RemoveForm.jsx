const RemoveForm = ({ user }) => {
  return `  
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
};
export default RemoveForm;
