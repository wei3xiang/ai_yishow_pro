const UpdateForm = ({ aiFlowerShop }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">花店名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiShopName" value="${aiFlowerShop.ai_shop_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">联系人</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiContactPerson" value="${aiFlowerShop.ai_contact_person}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">联系电话</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiContactPhone" value="${aiFlowerShop.ai_contact_phone}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花店地址</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiShopAddress" value="${aiFlowerShop.ai_shop_address}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花店介绍</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiShopIntroduction" value="${aiFlowerShop.ai_shop_introduction}" class="layui-input">  
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
