const UpdateForm = ({ aiInventory }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">产品ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductId" value="${aiInventory.aiProductId}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">产品名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductName" value="${aiInventory.aiProductName}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">数量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiQuantity" value="${aiInventory.aiQuantity}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">单位</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiUnit" value="${aiInventory.aiUnit}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">价格</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiPrice" value="${aiInventory.aiPrice}" class="layui-input">  
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
