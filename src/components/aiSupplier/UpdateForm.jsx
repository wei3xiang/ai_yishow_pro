const UpdateForm = ({ aiSupplier }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">供应商名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiSuppName" value="${aiSupplier.aiSuppName}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">供应商邮箱</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiSuppEmail" value="${aiSupplier.aiSuppEmail}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">供应商电话</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiSuppPhone" value="${aiSupplier.aiSuppPhone}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">供应商地址</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiSuppAddress" value="${aiSupplier.aiSuppAddress}" class="layui-input">  
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
