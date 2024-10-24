const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">花朵名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_flower_name" placeholder="请输入花朵名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花种类UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_flower_type_uuid" placeholder="请输入花种类UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花朵单价</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_flower_price" placeholder="请输入花朵单价"  class="layui-input">  
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
