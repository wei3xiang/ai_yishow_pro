const UpdateForm = ({ aiRegion }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">区域名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiName" value="${aiRegion.aiName}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">区域编码</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCode" value="${aiRegion.aiCode}" class="layui-input">  
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
