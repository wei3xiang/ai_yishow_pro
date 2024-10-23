const UpdateForm = ({ aiBeerCategory }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">分类ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCategoryUuid" value="${aiBeerCategory.ai_category_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">啤酒名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiBeerName" value="${aiBeerCategory.ai_beer_name}" class="layui-input">  
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
