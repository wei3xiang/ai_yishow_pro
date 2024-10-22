const UpdateForm = ({ aiOrderDetail }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">订单物理主键</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiOrderUuid" value="${aiOrderDetail.aiOrderUuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">产品物理主键</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductUuid" value="${aiOrderDetail.aiProductUuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">产品数量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductNum" value="${aiOrderDetail.aiProductNum}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">总价</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiTotalPrice" value="${aiOrderDetail.aiTotalPrice}" class="layui-input">  
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
