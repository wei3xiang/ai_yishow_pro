const RemoveForm = ({ aiCustomer }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">客户姓名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiCustomer.ai_customer_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">联系电话</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiCustomer.ai_contact_phone}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">联系邮箱</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiCustomer.ai_contact_email}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">联系地址</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiCustomer.ai_address}" class="layui-input" readonly>  
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
