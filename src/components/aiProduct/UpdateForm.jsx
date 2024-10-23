const UpdateForm = ({ aiProduct }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">商品名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="productName" value="${aiProduct.product_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品描述</label>  
      <div class="layui-input-block">  
        <input type="text" name="productDescription" value="${aiProduct.product_description}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品价格</label>  
      <div class="layui-input-block">  
        <input type="text" name="productPrice" value="${aiProduct.product_price}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品库存</label>  
      <div class="layui-input-block">  
        <input type="text" name="productStock" value="${aiProduct.product_stock}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品分类</label>  
      <div class="layui-input-block">  
        <input type="text" name="productCategory" value="${aiProduct.product_category}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品图片地址</label>  
      <div class="layui-input-block">  
        <input type="text" name="productImage" value="${aiProduct.product_image}" class="layui-input">  
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
