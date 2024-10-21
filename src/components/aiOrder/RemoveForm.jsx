const RemoveForm = ({ aiOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">客户</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.客户}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">花名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.花名}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">数量</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.数量}" class="layui-input" readonly>  
          </div>  
        </div>
    `;
};
export default RemoveForm;
