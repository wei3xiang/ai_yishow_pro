const UpdateForm = ({ aiFlowerShop }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">花店名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="shop_name" value="${aiFlowerShop.shop_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花店所在地</label>  
      <div class="layui-input-block">  
        <input type="text" name="shop_location" value="${aiFlowerShop.shop_location}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">联系人名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="contact_name" value="${aiFlowerShop.contact_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">联系人电话</label>  
      <div class="layui-input-block">  
        <input type="text" name="contact_phone" value="${aiFlowerShop.contact_phone}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">营业时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="opening_hours" value="${aiFlowerShop.opening_hours}" class="layui-input">  
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
