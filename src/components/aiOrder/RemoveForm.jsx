const RemoveForm = ({ aiOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">花店UUID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.shop_uuid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单日期</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.order_date}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单总额</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.total_amount}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">配送地址</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.delivery_address}" class="layui-input" readonly>  
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
