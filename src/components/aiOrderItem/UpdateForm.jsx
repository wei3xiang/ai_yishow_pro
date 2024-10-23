const UpdateForm = ({ aiOrderItem }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">订单物理主键</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderUuid" value="${aiOrderItem.ai_order_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">鲜花物理主键</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiFlowerUuid" value="${aiOrderItem.ai_flower_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">数量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiQuantity" value="${aiOrderItem.ai_quantity}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">小计价格</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiItemPrice" value="${aiOrderItem.ai_item_price}" class="layui-input">  
      </div>  
    </div>  
  </div>  
  <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
    <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
    <button class="layui-btn" id="modalOk">确定</button>
  </div>
  </div>`;
};
export default UpdateForm;
