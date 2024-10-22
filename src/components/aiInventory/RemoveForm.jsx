const RemoveForm = ({ aiInventory }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">产品编码</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.aiProductCode}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">产品名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.aiProductName}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">库存数量</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.aiQuantity}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">库存单位</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.aiUnit}" class="layui-input" readonly>  
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
