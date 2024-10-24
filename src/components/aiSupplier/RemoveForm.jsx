const RemoveForm = ({ aiSupplier }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">供应商名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSupplier.ai_supplier_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">联系人姓名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSupplier.ai_contact_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">联系人电话</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSupplier.ai_contact_phone}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">联系人邮箱</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSupplier.ai_contact_email}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">供应商地址</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSupplier.ai_supplier_address}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">创建时间</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSupplier.ai_creation_time}" class="layui-input" readonly>  
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
