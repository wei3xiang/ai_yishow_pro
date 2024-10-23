const DisableForm = ({ aiOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">用户ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUserUuid" value="${aiOrder.ai_user_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">啤酒名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiBeerName" value="${aiOrder.ai_beer_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiQuantity" value="${aiOrder.ai_quantity}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">下单日期</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderDate" value="${aiOrder.ai_order_date}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
