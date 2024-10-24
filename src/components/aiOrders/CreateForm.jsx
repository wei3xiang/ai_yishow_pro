const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_customer_uuid" placeholder="请输入客户ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">员工ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_employee_uuid" placeholder="请输入员工ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_product_uuid" placeholder="请输入商品ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">下单时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_order_date" placeholder="请输入下单时间"  class="layui-input">  
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
