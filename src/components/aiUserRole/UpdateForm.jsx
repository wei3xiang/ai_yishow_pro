const UpdateForm = ({ aiUserRole }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">用户ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiUserId" value="${aiUserRole.aiUserId}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">角色名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiRole" value="${aiUserRole.aiRole}" class="layui-input">  
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
