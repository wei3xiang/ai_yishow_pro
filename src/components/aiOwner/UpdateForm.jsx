const UpdateForm = ({ aiOwner }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">店铺UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiShopUuid" value="${aiOwner.ai_shop_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">用户UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiUserUuid" value="${aiOwner.ai_user_uuid}" class="layui-input">  
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
