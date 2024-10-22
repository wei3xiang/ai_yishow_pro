const RemoveForm = ({ aiSupplier }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">供应商名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSupplier.aiSuppName}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">供应商邮箱</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSupplier.aiSuppEmail}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">供应商电话</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSupplier.aiSuppPhone}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">供应商地址</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSupplier.aiSuppAddress}" class="layui-input" readonly>  
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
