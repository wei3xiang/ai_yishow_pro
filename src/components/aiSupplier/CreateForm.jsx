const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">公司名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_company_name" placeholder="请输入公司名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">联系人姓名</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_contact_name" placeholder="请输入联系人姓名"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">联系电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_phone" placeholder="请输入联系电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">电子邮件</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_email" placeholder="请输入电子邮件"  class="layui-input">  
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
