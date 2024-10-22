const RemoveForm = ({ aiOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">订单ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.aiOrderId}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">用户UUID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.aiUserUuid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单日期</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.aiOrderDate}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">总金额</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.aiOrderTotal}" class="layui-input" readonly>  
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
