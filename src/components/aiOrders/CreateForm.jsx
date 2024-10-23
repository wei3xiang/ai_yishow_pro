const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户uuid</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_user_uuid" placeholder="请输入客户uuid"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品uuid</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_goods_uuid" placeholder="请输入商品uuid"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单创建时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_order_time" placeholder="请输入订单创建时间"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单总价</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_total_price" placeholder="请输入订单总价"  class="layui-input">  
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
