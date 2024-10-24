const RemoveForm = ({ aiOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">订单编号</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.ai_order_number}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">客户姓名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.ai_customer_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">总金额（单位：元）</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.ai_total_amount}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单日期</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.ai_order_date}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">房间ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.ai_room_id}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">关联员工ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.ai_employee_id}" class="layui-input" readonly>  
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
