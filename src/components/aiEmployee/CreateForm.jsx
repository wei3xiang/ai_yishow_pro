const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">员工编号</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_employee_number" placeholder="请输入员工编号"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">员工姓名</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_name" placeholder="请输入员工姓名"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">员工职位</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_title" placeholder="请输入员工职位"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">员工邮箱</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_email" placeholder="请输入员工邮箱"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">员工电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_phone" placeholder="请输入员工电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花店编号</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_shop_number" placeholder="请输入花店编号"  class="layui-input">  
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
