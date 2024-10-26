const UpdateForm = ({ aiOrder }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">花店UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="shop_uuid" value="${aiOrder.shop_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单日期</label>  
      <div class="layui-input-block">  
        <input type="text" name="order_date" value="${aiOrder.order_date}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单总额</label>  
      <div class="layui-input-block">  
        <input type="text" name="total_amount" value="${aiOrder.total_amount}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">配送地址</label>  
      <div class="layui-input-block">  
        <input type="text" name="delivery_address" value="${aiOrder.delivery_address}" class="layui-input">  
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
