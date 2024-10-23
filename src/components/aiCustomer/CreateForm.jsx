const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户名</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_customer_name" placeholder="请输入客户名"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户邮箱</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_customer_email" placeholder="请输入客户邮箱"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_customer_phone" placeholder="请输入客户电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_customer_address" placeholder="请输入客户地址"  class="layui-input">  
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
