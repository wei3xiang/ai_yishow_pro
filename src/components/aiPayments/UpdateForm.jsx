const UpdateForm = ({ aiPayments }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">订单UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderUuid" value="${aiPayments.ai_order_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">支付金额</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiAmount" value="${aiPayments.ai_amount}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">支付日期</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiPaymentDate" value="${aiPayments.ai_payment_date}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">支付方式</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiPaymentMethod" value="${aiPayments.ai_payment_method}" class="layui-input">  
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
