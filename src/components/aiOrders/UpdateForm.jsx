const UpdateForm = ({ aiOrders }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">客户uuid</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiUserUuid" value="${aiOrders.ai_user_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品uuid</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiGoodsUuid" value="${aiOrders.ai_goods_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单创建时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderTime" value="${aiOrders.ai_order_time}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单总价</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiTotalPrice" value="${aiOrders.ai_total_price}" class="layui-input">  
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
