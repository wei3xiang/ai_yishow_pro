const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">店铺名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_shop_name" placeholder="请输入店铺名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">店铺位置</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_location" placeholder="请输入店铺位置"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">店铺负责人UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_owner_uuid" placeholder="请输入店铺负责人UUID"  class="layui-input">  
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
