const UpdateForm = ({ aiInventory }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">啤酒名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiBeerName" value="${aiInventory.ai_beer_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">类型</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiType" value="${aiInventory.ai_type}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">制造商</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiManufacturer" value="${aiInventory.ai_manufacturer}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">容量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiVolume" value="${aiInventory.ai_volume}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">库存量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiQuantity" value="${aiInventory.ai_quantity}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">单价</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiPrice" value="${aiInventory.ai_price}" class="layui-input">  
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
