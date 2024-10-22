const DisableForm = ({ aiInventory }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">啤酒ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiBeerId" value="${aiInventory.aiBeerId}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">瓶装数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiBottleQuantity" value="${aiInventory.aiBottleQuantity}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">罐装数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiCanQuantity" value="${aiInventory.aiCanQuantity}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
