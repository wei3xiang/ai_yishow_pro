const DisableForm = ({ aiOrders }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单号</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderNo" value="${aiOrders.ai_order_no}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">用户UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUserUuid" value="${aiOrders.ai_user_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">物品UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiItemUuid" value="${aiOrders.ai_item_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订购数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiQuantity" value="${aiOrders.ai_quantity}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单日期</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderDate" value="${aiOrders.ai_order_date}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单状态</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderStatus" value="${aiOrders.ai_order_status}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;