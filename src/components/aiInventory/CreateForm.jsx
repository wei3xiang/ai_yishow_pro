const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">花类型UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="flower_type_uuid" placeholder="请输入花类型UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品信息UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="product_info_uuid" placeholder="请输入产品信息UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">库存数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="stock_amount" placeholder="请输入库存数量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">供应商</label>  
            <div class="layui-input-block">  
                <input type="text" name="supplier" placeholder="请输入供应商"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">保质期（如需记录），可选</label>  
            <div class="layui-input-block">  
                <input type="text" name="inarranty_date" placeholder="请输入保质期（如需记录），可选"  class="layui-input">  
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
