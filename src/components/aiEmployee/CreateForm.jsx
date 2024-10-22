const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">员工姓名</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_name" placeholder="请输入员工姓名"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_phone" placeholder="请输入电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">邮箱</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_email" placeholder="请输入邮箱"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">职位</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_position" placeholder="请输入职位"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">入职日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_start_date" placeholder="请输入入职日期"  class="layui-input">  
            </div>  
            </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; spadding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>  
      </div>  
    `;
};
export default CreateForm;
