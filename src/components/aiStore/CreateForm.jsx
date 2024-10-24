const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">店铺ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="store_id" placeholder="请输入店铺ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">店铺名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="store_name" placeholder="请输入店铺名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">店铺地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="store_address" placeholder="请输入店铺地址"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">店铺邮箱</label>  
            <div class="layui-input-block">  
                <input type="text" name="store_email" placeholder="请输入店铺邮箱"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">店铺电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="store_phone" placeholder="请输入店铺电话"  class="layui-input">  
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