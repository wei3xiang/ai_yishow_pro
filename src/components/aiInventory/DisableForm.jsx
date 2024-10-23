const DisableForm = ({ aiInventory }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductId" value="${aiInventory.ai_product_id}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品类别</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiCategory" value="${aiInventory.ai_category}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品描述</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiDescription" value="${aiInventory.ai_description}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">库存数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiStockQuantity" value="${aiInventory.ai_stock_quantity}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">计量单位</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUnit" value="${aiInventory.ai_unit}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">进货价</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiPurchasePrice" value="${aiInventory.ai_purchase_price}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">售价</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiSalePrice" value="${aiInventory.ai_sale_price}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
