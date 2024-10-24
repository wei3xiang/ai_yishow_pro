const DisableForm = ({ aiManager }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">管理员用户UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="userUuid" value="${aiManager.user_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">管理员姓名</label>  
            <div class="layui-input-block">  
              <input type="text" name="managerName" value="${aiManager.manager_name}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
