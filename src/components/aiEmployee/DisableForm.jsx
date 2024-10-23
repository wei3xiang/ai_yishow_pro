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
            <label class="layui-form-label">职位</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiPosition" value="${aiEmployee.ai_position}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">部门</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiDepartment" value="${aiEmployee.ai_department}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">入职日期</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiHireDate" value="${aiEmployee.ai_hire_date}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">薪资</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiSalary" value="${aiEmployee.ai_salary}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
