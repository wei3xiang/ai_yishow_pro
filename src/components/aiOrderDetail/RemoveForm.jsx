const RemoveForm = ({ aiOrderDetail }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">订单ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrderDetail.ai_order_uuid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">商品ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrderDetail.ai_product_uuid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">数量</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrderDetail.ai_quantity}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">单价</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrderDetail.ai_unit_price}" class="layui-input" readonly>  
          </div>  
        </div>
        </div>
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>   
      </div>  
    `;
};
export default RemoveForm;
