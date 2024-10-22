const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_name" placeholder="请输入客户名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户联系方式</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_contact" placeholder="请输入客户联系方式"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_address" placeholder="请输入客户地址"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户邮箱</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_email" placeholder="请输入客户邮箱"  class="layui-input">  
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
