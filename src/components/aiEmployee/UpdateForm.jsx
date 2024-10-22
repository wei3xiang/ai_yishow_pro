const UpdateForm = ({ aiEmployee }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">员工姓名</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiName" value="${aiEmployee.ai_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">职位</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiPosition" value="${aiEmployee.ai_position}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">薪资</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiSalary" value="${aiEmployee.ai_salary}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">入职日期</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiHireDate" value="${aiEmployee.ai_hire_date}" class="layui-input">  
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
