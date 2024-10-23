const UpdateForm = ({ aiBeer }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">酿造商的 UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiBreweryUuid" value="${aiBeer.ai_brewery_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">啤酒名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiName" value="${aiBeer.ai_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">啤酒风格</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiStyle" value="${aiBeer.ai_style}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">酒精度</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiAbv" value="${aiBeer.ai_abv}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">绝苦值</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiIbu" value="${aiBeer.ai_ibu}" class="layui-input">  
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
