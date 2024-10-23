const UpdateForm = ({ aiStock }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">产品名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductName" value="${aiStock.ai_product_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">供应商名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiSupplierName" value="${aiStock.ai_supplier_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">库存数量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiQuantity" value="${aiStock.ai_quantity}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label"> reorder 级别</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiReorderLevel" value="${aiStock.ai_reorder_level}" class="layui-input">  
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
