const UpdateForm = ({ aiOrderDetail }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">订单UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderUuid" value="${aiOrderDetail.ai_order_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花产品UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiFlowerUuid" value="${aiOrderDetail.ai_flower_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">购买数量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiQuantity" value="${aiOrderDetail.ai_quantity}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">单价</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiPrice" value="${aiOrderDetail.ai_price}" class="layui-input">  
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
