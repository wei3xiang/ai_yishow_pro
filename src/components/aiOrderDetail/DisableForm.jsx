const DisableForm = ({ aiOrderDetail }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">订单UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOrderUuid" value="${aiOrderDetail.ai_order_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花朵UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiFlowerUuid" value="${aiOrderDetail.ai_flower_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花朵数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiFlowerCount" value="${aiOrderDetail.ai_flower_count}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花朵总价</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiFlowerTotalPrice" value="${aiOrderDetail.ai_flower_total_price}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
