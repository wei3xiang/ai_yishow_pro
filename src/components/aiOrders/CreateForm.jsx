const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单号</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_order_no" placeholder="请输入订单号"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">用户UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_user_uuid" placeholder="请输入用户UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">物品UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_item_uuid" placeholder="请输入物品UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">订购数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_quantity" placeholder="请输入订购数量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_order_date" placeholder="请输入订单日期"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单状态</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_order_status" placeholder="请输入订单状态"  class="layui-input">  
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
