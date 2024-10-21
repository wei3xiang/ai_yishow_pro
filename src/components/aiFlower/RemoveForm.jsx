const RemoveForm = ({ aiFlower }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">花名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlower.花名}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">花价</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlower.花价}" class="layui-input" readonly>  
          </div>  
        </div>
    `;
};
export default RemoveForm;
