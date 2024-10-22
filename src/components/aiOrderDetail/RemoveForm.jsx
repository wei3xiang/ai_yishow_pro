const RemoveForm = ({ aiOrderDetail }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">订单UUID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrderDetail.aiOrderUuid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">产品编码</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrderDetail.aiProductCode}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订购数量</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrderDetail.aiQuantity}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">单价</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrderDetail.aiUnitPrice}" class="layui-input" readonly>  
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
