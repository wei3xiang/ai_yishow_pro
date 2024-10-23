const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
<<<<<<< HEAD:src/components/aiOrder/CreateForm.jsx
            <label class="layui-form-label">客户</label>  
            <div class="layui-input-block">  
                <input type="text" name="customer" placeholder="请输入客户"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花名</label>  
            <div class="layui-input-block">  
                <input type="text" name="flower" placeholder="请输入花名"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="quantity" placeholder="请输入数量"  class="layui-input">  
=======
            <label class="layui-form-label">订单UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_order_uuid" placeholder="请输入订单UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">支付金额</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_amount" placeholder="请输入支付金额"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">支付日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_payment_date" placeholder="请输入支付日期"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">支付方式</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_payment_method" placeholder="请输入支付方式"  class="layui-input">  
>>>>>>> 78f79555fe4e4ad3ba07d3f1482a4fd28f5404de:src/components/aiPayments/CreateForm.jsx
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
