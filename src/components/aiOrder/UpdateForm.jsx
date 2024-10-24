const UpdateForm = ({ aiOrder }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">用户ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="userid" value="${aiOrder.userid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花信息ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="flowerinfoid" value="${aiOrder.flowerinfoid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单金额</label>  
      <div class="layui-input-block">  
        <input type="text" name="amount" value="${aiOrder.amount}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">订单状态</label>  
      <div class="layui-input-block">  
        <input type="text" name="status" value="${aiOrder.status}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">创建时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="createdAt" value="${aiOrder.created_at}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">修改时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="updatedAt" value="${aiOrder.updated_at}" class="layui-input">  
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
