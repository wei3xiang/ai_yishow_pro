const UpdateForm = ({ aiCustomer }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">客户姓名</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiName" value="${aiCustomer.ai_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">客户邮箱</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiEmail" value="${aiCustomer.ai_email}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">客户电话</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiPhone" value="${aiCustomer.ai_phone}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">客户地址</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiAddress" value="${aiCustomer.ai_address}" class="layui-input">  
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
