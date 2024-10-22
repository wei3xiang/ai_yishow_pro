const DisableForm = ({ aiProduct }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">类型ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiTypeId" value="${aiProduct.aiTypeId}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">酒品名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiName" value="${aiProduct.aiName}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">描述</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiDescription" value="${aiProduct.aiDescription}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">价格</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiPrice" value="${aiProduct.aiPrice}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
