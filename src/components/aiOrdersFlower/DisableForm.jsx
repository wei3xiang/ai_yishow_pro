const DisableForm = ({ aiOrdersFlower }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderId" value="${aiOrdersFlower.ai_order_id}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiFlowerId" value="${aiOrdersFlower.ai_flower_id}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiQuantity" value="${aiOrdersFlower.ai_quantity}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
