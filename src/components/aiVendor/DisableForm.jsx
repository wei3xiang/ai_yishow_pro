const DisableForm = ({ aiVendor }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">商家名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="vendorName" value="${aiVendor.vendor_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商家联系电话</label>  
            <div class="layui-input-block">  
              <input type="text" name="vendorPhone" value="${aiVendor.vendor_phone}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商家邮箱</label>  
            <div class="layui-input-block">  
              <input type="text" name="vendorEmail" value="${aiVendor.vendor_email}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商家地址</label>  
            <div class="layui-input-block">  
              <input type="text" name="vendorAddress" value="${aiVendor.vendor_address}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">商家官网</label>  
            <div class="layui-input-block">  
              <input type="text" name="vendorWebsite" value="${aiVendor.vendor_website}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
