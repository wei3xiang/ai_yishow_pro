const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单号</label>  
            <div class="layui-input-block">  
                <input type="text" name="order_id" placeholder="请输入订单号"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="product_id" placeholder="请输入产品ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">用户ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="user_id" placeholder="请输入用户ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="product_name" placeholder="请输入产品名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="order_time" placeholder="请输入订单时间"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单状态</label>  
            <div class="layui-input-block">  
                <input type="text" name="order_status" placeholder="请输入订单状态"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单总价</label>  
            <div class="layui-input-block">  
                <input type="text" name="total_price" placeholder="请输入订单总价"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="count" placeholder="请输入商品数量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">用户唯一标识</label>  
            <div class="layui-input-block">  
                <input type="text" name="user_uuid" placeholder="请输入用户唯一标识"  class="layui-input">  
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
