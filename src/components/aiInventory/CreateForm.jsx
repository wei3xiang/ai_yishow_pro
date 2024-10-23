const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_product_id" placeholder="请输入产品ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品类别</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_category" placeholder="请输入产品类别"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品描述</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_description" placeholder="请输入产品描述"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">库存数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_stock_quantity" placeholder="请输入库存数量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">计量单位</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_unit" placeholder="请输入计量单位"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">进货价</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_purchase_price" placeholder="请输入进货价"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">售价</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_sale_price" placeholder="请输入售价"  class="layui-input">  
            </div>  
            </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; spadding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>  
      </div>  
    `;
};
export default CreateForm;
