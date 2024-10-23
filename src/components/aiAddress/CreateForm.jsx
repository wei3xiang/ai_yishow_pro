const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">用户UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_user_uuid" placeholder="请输入用户UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">收货人</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_name" placeholder="请输入收货人"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">详细地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_address" placeholder="请输入详细地址"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">联系电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_phone" placeholder="请输入联系电话"  class="layui-input">  
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
