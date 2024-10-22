const RemoveForm = ({ aiOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">用户uuid</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.aiUserUuid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">库存uuid</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.aiInventoryUuid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单日期</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.aiOrderDate}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单数量</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.aiQuantity}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">总价</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.aiTotalPrice}" class="layui-input" readonly>  
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
