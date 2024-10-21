const RemoveForm = ({ aiFlowerShop }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">店名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlowerShop.店名}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">地址</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlowerShop.地址}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">电话</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlowerShop.电话}" class="layui-input" readonly>  
          </div>  
        </div>
    `;
};
export default RemoveForm;
