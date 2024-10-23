const RemoveForm = ({ aiProduct }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">产品ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiProduct.ai_product_id}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">产品名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiProduct.ai_product_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">产品描述</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiProduct.ai_description}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">库存数量</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiProduct.ai_stock}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">产品类别</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiProduct.ai_category}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">品牌</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiProduct.ai_brand}" class="layui-input" readonly>  
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
