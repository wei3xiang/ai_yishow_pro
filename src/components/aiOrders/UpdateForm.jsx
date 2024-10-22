const UpdateForm = ({ aiOrders }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">订单号</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderId" value="${aiOrders.aiOrderId}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">用户ID（关联ai_user表中的uuid）</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiUserUuid" value="${aiOrders.aiUserUuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单状态</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderStatus" value="${aiOrders.aiOrderStatus}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单金额</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiTotalAmount" value="${aiOrders.aiTotalAmount}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单创建时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderCreateTime" value="${aiOrders.aiOrderCreateTime}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">最后更新时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiLastUpdate" value="${aiOrders.aiLastUpdate}" class="layui-input">  
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
