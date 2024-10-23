const UpdateForm = ({ aiBrewingLog }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">酿酒日期</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiBrewingDate" value="${aiBrewingLog.ai_brewing_date}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">酿酒商品ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiBrewedItemId" value="${aiBrewingLog.ai_brewed_item_id}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">酿酒记录</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiNotes" value="${aiBrewingLog.ai_notes}" class="layui-input">  
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
