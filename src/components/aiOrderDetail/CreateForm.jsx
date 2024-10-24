const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_order_uuid" placeholder="请输入订单UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花朵UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_flower_uuid" placeholder="请输入花朵UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花朵数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_flower_count" placeholder="请输入花朵数量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花朵总价</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_flower_total_price" placeholder="请输入花朵总价"  class="layui-input">  
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
