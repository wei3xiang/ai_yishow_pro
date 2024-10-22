const RemoveForm = ({ aiMealRecord }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">用户ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiMealRecord.aiUserId}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiMealRecord.aiOrderId}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">用餐日期</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiMealRecord.aiMealDate}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">用餐时间</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiMealRecord.aiMealTime}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">商品ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiMealRecord.aiProductId}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">数量</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiMealRecord.aiQuantity}" class="layui-input" readonly>  
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
