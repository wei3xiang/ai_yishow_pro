const UpdateForm = ({ aiOrderDetail }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">订单ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderId" value="${aiOrderDetail.ai_order_id}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花卉种类ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiFlowerTypeId" value="${aiOrderDetail.ai_flower_type_id}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">购买数量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiQuantity" value="${aiOrderDetail.ai_quantity}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">总价</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiTotalPrice" value="${aiOrderDetail.ai_total_price}" class="layui-input">  
      </div>  
    </div>  
  </div>  
  <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
    <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
    <button class="layui-btn" id="modalOk">确定</button>
  </div>
  </div>`;
};
export default UpdateForm;
