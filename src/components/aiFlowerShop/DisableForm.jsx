const DisableForm = ({ aiFlowerShop }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiShopName" value="${aiFlowerShop.ai_shop_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花店地址</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiShopAddress" value="${aiFlowerShop.ai_shop_address}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
