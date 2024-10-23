const DisableForm = ({ aiRole }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">角色名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiRoleName" value="${aiRole.ai_role_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">角色描述</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiDescription" value="${aiRole.ai_description}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
