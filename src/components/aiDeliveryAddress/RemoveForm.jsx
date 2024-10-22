const RemoveForm = ({ aiDeliveryAddress }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">客户UUID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiDeliveryAddress.aiCustomerUuid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">地址类型 (如：收货地址, 发货地址)</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiDeliveryAddress.aiAddressType}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">收件人姓名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiDeliveryAddress.aiName}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">电话</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiDeliveryAddress.aiPhone}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">详细地址</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiDeliveryAddress.aiAddress}" class="layui-input" readonly>  
          </div>  
        </div>
        </div>
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>   
      </div>  
    `;
};
export default RemoveForm;
