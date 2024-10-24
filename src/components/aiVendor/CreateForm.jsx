const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">商家名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="vendor_name" placeholder="请输入商家名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商家联系电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="vendor_phone" placeholder="请输入商家联系电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商家邮箱</label>  
            <div class="layui-input-block">  
                <input type="text" name="vendor_email" placeholder="请输入商家邮箱"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商家地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="vendor_address" placeholder="请输入商家地址"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商家官网</label>  
            <div class="layui-input-block">  
                <input type="text" name="vendor_website" placeholder="请输入商家官网"  class="layui-input">  
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
