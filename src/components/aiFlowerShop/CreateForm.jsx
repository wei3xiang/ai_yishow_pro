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
            <label class="layui-form-label">花店所在地</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_location" placeholder="请输入花店所在地"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">联系人名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="contact_name" placeholder="请输入联系人名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">联系人电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="contact_phone" placeholder="请输入联系人电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">营业时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="opening_hours" placeholder="请输入营业时间"  class="layui-input">  
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
