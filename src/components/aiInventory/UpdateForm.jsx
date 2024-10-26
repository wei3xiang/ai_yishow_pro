const UpdateForm = ({ aiInventory }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">花类型UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="flower_type_uuid" value="${aiInventory.flower_type_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">产品信息UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="product_info_uuid" value="${aiInventory.product_info_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">库存数量</label>  
      <div class="layui-input-block">  
        <input type="text" name="stock_amount" value="${aiInventory.stock_amount}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">供应商</label>  
      <div class="layui-input-block">  
        <input type="text" name="supplier" value="${aiInventory.supplier}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">保质期（如需记录），可选</label>  
      <div class="layui-input-block">  
        <input type="text" name="inarranty_date" value="${aiInventory.inarranty_date}" class="layui-input">  
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
