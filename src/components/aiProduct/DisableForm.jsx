const DisableForm = ({ aiProduct }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductName" value="${aiProduct.aiProductName}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品类型</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductType" value="${aiProduct.aiProductType}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品价格</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductPrice" value="${aiProduct.aiProductPrice}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品库存</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductStock" value="${aiProduct.aiProductStock}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
