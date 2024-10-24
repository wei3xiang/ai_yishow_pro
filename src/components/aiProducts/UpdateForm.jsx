const UpdateForm = ({ aiProducts }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">商品名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiName" value="${aiProducts.ai_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">类别</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCategory" value="${aiProducts.ai_category}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">价格</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiPrice" value="${aiProducts.ai_price}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">库存</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiStock" value="${aiProducts.ai_stock}" class="layui-input">  
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
