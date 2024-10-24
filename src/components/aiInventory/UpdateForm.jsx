const UpdateForm = ({ aiInventory }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">商品名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiItemName" value="${aiInventory.ai_item_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiItemId" value="${aiInventory.ai_item_id}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">库存数量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiQuantity" value="${aiInventory.ai_quantity}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">库存重置值</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiRestockValue" value="${aiInventory.ai_restock_value}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">库存状态</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiStockStatus" value="${aiInventory.ai_stock_status}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">创建时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCreationTime" value="${aiInventory.ai_creation_time}" class="layui-input">  
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
