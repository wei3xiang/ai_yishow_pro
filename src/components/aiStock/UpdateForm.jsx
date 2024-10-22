const UpdateForm = ({ aiStock }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">商品ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductId" value="${aiStock.aiProductId}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">总数</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiTotal" value="${aiStock.aiTotal}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">库存水平</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiStockLevel" value="${aiStock.aiStockLevel}" class="layui-input">  
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
