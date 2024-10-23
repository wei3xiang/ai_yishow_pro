const UpdateForm = ({ aiOrder }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">订单编号</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderNumber" value="${aiOrder.ai_order_number}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单日期</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderDate" value="${aiOrder.ai_order_date}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">客户 UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCustomerUuid" value="${aiOrder.ai_customer_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">店铺 UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiShopUuid" value="${aiOrder.ai_shop_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单总金额</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderTotal" value="${aiOrder.ai_order_total}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单状态</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiStatus" value="${aiOrder.ai_status}" class="layui-input">  
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
