const RemoveForm = ({ aiCustomer }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">客户名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiCustomer.name}" class="layui-input readonly">  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">电话</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiCustomer.phone}" class="layui-input readonly">  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">地址</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiCustomer.address}" class="layui-input readonly">  
          </div>  
        </div>
        </div>
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">完成</button>   
      </div>  
    `;
};
export default RemoveForm;
