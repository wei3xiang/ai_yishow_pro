const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">花店名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_shop_name" placeholder="请输入花店名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">联系人</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_contact_person" placeholder="请输入联系人"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">联系电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_contact_phone" placeholder="请输入联系电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花店地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_shop_address" placeholder="请输入花店地址"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花店介绍</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_shop_introduction" placeholder="请输入花店介绍"  class="layui-input">  
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
