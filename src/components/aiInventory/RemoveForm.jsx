const RemoveForm = ({ aiInventory }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">商品ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.ai_item_id}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">商品名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.ai_item_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">库存数量</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.ai_quantity}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">进货价格</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.ai_purchase_price}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">销售价格</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.ai_sale_price}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">供应商</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.ai_supplier}" class="layui-input" readonly>  
          </div>  
        </div>
        </div>
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>   
      </div>  
    `;
};
export default RemoveForm;
