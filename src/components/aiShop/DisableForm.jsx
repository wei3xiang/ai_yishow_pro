const DisableForm = ({ aiShop }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopName" value="${aiShop.shop_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店地址</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopAddress" value="${aiShop.shop_address}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店电话</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopPhone" value="${aiShop.shop_phone}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店邮箱</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopEmail" value="${aiShop.shop_email}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店网站</label>  
            <div class="layui-input-block">  
              <input type="text" name="shopWebsite" value="${aiShop.shop_website}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
