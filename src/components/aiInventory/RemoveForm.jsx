const RemoveForm = ({ aiInventory }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">产品ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.aiProductId}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">产品名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.aiProductName}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">库存</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.aiStock}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">重订货级别</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.aiReorderLevel}" class="layui-input" readonly>  
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
