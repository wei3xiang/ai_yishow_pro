const DisableForm = ({ aiFlowerType }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">花卉名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiFlowerName" value="${aiFlowerType.ai_flower_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花卉价格</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiFlowerPrice" value="${aiFlowerType.ai_flower_price}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
