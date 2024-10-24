const DisableForm = ({ aiShop }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">店铺名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiShopName" value="${aiShop.ai_shop_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">店铺位置</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiLocation" value="${aiShop.ai_location}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">店铺负责人UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiOwnerUuid" value="${aiShop.ai_owner_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
