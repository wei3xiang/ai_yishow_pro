const DisableForm = ({ aiCustomer }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">客户姓名</label>  
            <div class="layui-input-block">  
              <input type="text" name="customerName" value="${aiCustomer.customer_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">客户电子邮箱</label>  
            <div class="layui-input-block">  
              <input type="text" name="customerEmail" value="${aiCustomer.customer_email}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">客户电话</label>  
            <div class="layui-input-block">  
              <input type="text" name="customerPhone" value="${aiCustomer.customer_phone}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">客户地址</label>  
            <div class="layui-input-block">  
              <input type="text" name="customerAddress" value="${aiCustomer.customer_address}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
