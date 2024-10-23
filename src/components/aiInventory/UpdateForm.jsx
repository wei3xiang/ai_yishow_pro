const UpdateForm = ({ aiInventory }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">产品名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductName" value="${aiInventory.ai_product_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">产品类型</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductType" value="${aiInventory.ai_product_type}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">库存数量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiQuantity" value="${aiInventory.ai_quantity}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">再订货水平</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiReorderLevel" value="${aiInventory.ai_reorder_level}" class="layui-input">  
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
