const DisableForm = ({ aiFlowerShop }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopName" value="${aiFlowerShop.shop_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店所在地</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopLocation" value="${aiFlowerShop.shop_location}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">联系人名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="contactName" value="${aiFlowerShop.contact_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">联系人电话</label>  
            <div class="layui-input-block">  
              <input type="text" name="contactPhone" value="${aiFlowerShop.contact_phone}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">营业时间</label>  
            <div class="layui-input-block">  
              <input type="text" name="openingHours" value="${aiFlowerShop.opening_hours}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
