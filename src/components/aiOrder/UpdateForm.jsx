const UpdateForm = ({ aiOrder }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">用户UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiUserUuid" value="${aiOrder.ai_user_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductUuid" value="${aiOrder.ai_product_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品数量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiQuantity" value="${aiOrder.ai_quantity}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单总价</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiTotal" value="${aiOrder.ai_total}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单日期</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderDate" value="${aiOrder.ai_order_date}" class="layui-input">  
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
