const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiCustomerUuid" placeholder="请输入客户UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">地址类型 (如：收货地址, 发货地址)</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiAddressType" placeholder="请输入地址类型 (如：收货地址, 发货地址)"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">收件人姓名</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiName" placeholder="请输入收件人姓名"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiPhone" placeholder="请输入电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">详细地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiAddress" placeholder="请输入详细地址"  class="layui-input">  
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
