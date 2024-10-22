const RemoveForm = ({ aiEmployee }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">员工姓名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiEmployee.aiEmployeeName}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">员工邮箱</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiEmployee.aiEmployeeEmail}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">员工电话</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiEmployee.aiEmployeePhone}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">员工地址</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiEmployee.aiEmployeeAddress}" class="layui-input" readonly>  
          </div>  
        </div>
        </div>
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>   
      </div>  
    `;
};
export default RemoveForm;
