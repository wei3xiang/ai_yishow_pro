const UpdateForm = ({ aiInventory }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">产品物理主键</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductUuid" value="${aiInventory.aiProductUuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">当前库存</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCurrentStock" value="${aiInventory.aiCurrentStock}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">最后更新时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiLastUpdateTime" value="${aiInventory.aiLastUpdateTime}" class="layui-input">  
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
