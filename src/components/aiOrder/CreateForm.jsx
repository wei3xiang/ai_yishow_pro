const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户物理主键</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_customer_uuid" placeholder="请输入客户物理主键"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">店铺物理主键</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_shop_uuid" placeholder="请输入店铺物理主键"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_order_date" placeholder="请输入订单日期"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单总价</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_total_price" placeholder="请输入订单总价"  class="layui-input">  
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
