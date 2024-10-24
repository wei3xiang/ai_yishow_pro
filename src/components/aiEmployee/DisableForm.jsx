const DisableForm = ({ aiEmployee }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">员工姓名</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiEmployeeName" value="${aiEmployee.ai_employee_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">员工性别</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiEmployeeGender" value="${aiEmployee.ai_employee_gender}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">员工年龄</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiEmployeeAge" value="${aiEmployee.ai_employee_age}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">职位</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiEmployeePosition" value="${aiEmployee.ai_employee_position}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
