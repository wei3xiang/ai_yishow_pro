const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">类别UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_category_uuid" placeholder="请输入类别UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">店铺UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_store_uuid" placeholder="请输入店铺UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_product_name" placeholder="请输入商品名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品价格</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_product_price" placeholder="请输入商品价格"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品库存</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_product_stock" placeholder="请输入商品库存"  class="layui-input">  
            </div>  
            </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>  
      </div>  
    `;
};
export default CreateForm;
