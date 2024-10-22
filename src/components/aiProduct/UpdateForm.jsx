const UpdateForm = ({ aiProduct }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">商品名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductName" value="${aiProduct.aiProductName}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品价格</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductPrice" value="${aiProduct.aiProductPrice}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品类别</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductCategory" value="${aiProduct.aiProductCategory}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">库存数量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductInventory" value="${aiProduct.aiProductInventory}" class="layui-input">  
      </div>  
    </div>  
  </div>  
  <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
    <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
    <button class="layui-btn" id="modalOk">确定</button>
  </div>
  </div>`;
};
export default UpdateForm;
