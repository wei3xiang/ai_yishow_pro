const UpdateForm = ({ aiShop }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">店铺名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiShopName" value="${aiShop.ai_shop_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">店铺地址</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiShopAddress" value="${aiShop.ai_shop_address}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">店铺电话</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiShopPhone" value="${aiShop.ai_shop_phone}" class="layui-input">  
      </div>  
    </div>  
  </div>  
  <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
    <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
    <button class="layui-btn" id="modalOk">确定</button>
  </div>
  </div>`;
};
export default UpdateForm;
