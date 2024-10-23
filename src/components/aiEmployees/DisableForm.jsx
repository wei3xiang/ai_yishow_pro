const DisableForm = ({ aiEmployees }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">员工姓名</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiName" value="${aiEmployees.ai_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">员工电话</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiPhone" value="${aiEmployees.ai_phone}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">员工工资</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiSalary" value="${aiEmployees.ai_salary}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
