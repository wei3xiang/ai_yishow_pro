const DisableForm = ({ aiInventoryLog }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">库存UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiInventoryUuid" value="${aiInventoryLog.ai_inventory_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">操作原因</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiReason" value="${aiInventoryLog.ai_reason}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">变动数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiChange" value="${aiInventoryLog.ai_change}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">变动日期</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiDate" value="${aiInventoryLog.ai_date}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
