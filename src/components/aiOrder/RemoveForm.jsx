const RemoveForm = ({ aiOrder }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">用户ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.userid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">花信息ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.flowerinfoid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单金额</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.amount}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">订单状态</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.status}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">创建时间</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.created_at}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">修改时间</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiOrder.updated_at}" class="layui-input" readonly>  
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
