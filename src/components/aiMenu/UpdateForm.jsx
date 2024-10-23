const UpdateForm = ({ aiMenu }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">菜单名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiMenuName" value="${aiMenu.ai_menu_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">菜单描述</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiMenuDesc" value="${aiMenu.ai_menu_desc}" class="layui-input">  
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
