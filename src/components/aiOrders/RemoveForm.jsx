const RemoveForm = ({ aiOrders }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">订单号</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrders.aiOrderId}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">用户ID（关联ai_user表中的uuid）</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrders.aiUserUuid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单状态</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrders.aiOrderStatus}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单金额</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrders.aiTotalAmount}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单创建时间</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrders.aiOrderCreateTime}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">最后更新时间</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrders.aiLastUpdate}" class="layui-input" readonly>  
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
