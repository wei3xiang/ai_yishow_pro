const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">员工姓名</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_employee_name" placeholder="请输入员工姓名"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">员工性别</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_employee_gender" placeholder="请输入员工性别"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">员工年龄</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_employee_age" placeholder="请输入员工年龄"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">职位</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_employee_position" placeholder="请输入职位"  class="layui-input">  
            </div>  
            </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>  
      </div>  
    `;
};
export default CreateForm;
