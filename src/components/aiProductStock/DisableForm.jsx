const DisableForm = ({ aiProductStock }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductUuid" value="${aiProductStock.ai_product_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">当前库存</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiCurrentQuantity" value="${aiProductStock.ai_current_quantity}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">最低库存</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiMinimumQuantity" value="${aiProductStock.ai_minimum_quantity}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
