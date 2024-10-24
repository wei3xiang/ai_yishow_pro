const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">花店名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_name" placeholder="请输入花店名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花店地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_address" placeholder="请输入花店地址"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花店电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_phone" placeholder="请输入花店电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花店邮箱</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_email" placeholder="请输入花店邮箱"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花店网站</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_website" placeholder="请输入花店网站"  class="layui-input">  
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
