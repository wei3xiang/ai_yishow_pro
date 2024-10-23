const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单物理主键</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_order_uuid" placeholder="请输入订单物理主键"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">鲜花物理主键</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_flower_uuid" placeholder="请输入鲜花物理主键"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_quantity" placeholder="请输入数量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">小计价格</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_item_price" placeholder="请输入小计价格"  class="layui-input">  
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
