const RemoveForm = ({ aiOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">店铺UUID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.ai_shop_uuid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单时间</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.ai_order_time}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单总价</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.ai_total_price}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单状态</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.ai_status}" class="layui-input" readonly>  
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
