const UpdateForm = ({ aiSupplier }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">公司名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCompanyName" value="${aiSupplier.ai_company_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">联系人姓名</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiContactName" value="${aiSupplier.ai_contact_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">联系人电话</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiContactPhone" value="${aiSupplier.ai_contact_phone}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">联系人邮箱</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiContactEmail" value="${aiSupplier.ai_contact_email}" class="layui-input">  
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
