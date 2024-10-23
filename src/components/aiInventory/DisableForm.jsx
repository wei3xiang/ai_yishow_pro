const DisableForm = ({ aiInventory }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">酿造商的 UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiBreweryUuid" value="${aiInventory.ai_brewery_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">啤酒的 UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiBeerUuid" value="${aiInventory.ai_beer_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">库存数量（升）</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiAmount" value="${aiInventory.ai_amount}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
