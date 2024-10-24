const DisableForm = ({ aiFlowerShop }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">商店编号</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopId" value="${aiFlowerShop.shop_id}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商店名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopName" value="${aiFlowerShop.shop_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商店地址</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopAddress" value="${aiFlowerShop.shop_address}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商店电话</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopPhone" value="${aiFlowerShop.shop_phone}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商店开门时间</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopOpenTime" value="${aiFlowerShop.shop_open_time}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商店关门时间</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopCloseTime" value="${aiFlowerShop.shop_close_time}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商店纬度</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopLatitude" value="${aiFlowerShop.shop_latitude}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商店经度</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopLongitude" value="${aiFlowerShop.shop_longitude}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商店描述</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopDescription" value="${aiFlowerShop.shop_description}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
