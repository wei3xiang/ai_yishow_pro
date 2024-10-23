const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">销售编号</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_sale_number" placeholder="请输入销售编号"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花店编号</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_shop_number" placeholder="请输入花店编号"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">销售日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_sale_date" placeholder="请输入销售日期"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">销售金额</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_revenue" placeholder="请输入销售金额"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户姓名</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_customer_name" placeholder="请输入客户姓名"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_customer_phone" placeholder="请输入客户电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品编号</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_product_number" placeholder="请输入商品编号"  class="layui-input">  
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
