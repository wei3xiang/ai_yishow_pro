const UpdateForm = ({ aiDish }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">菜品名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiName" value="${aiDish.aiName}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">类别</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCategory" value="${aiDish.aiCategory}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">价格</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiPrice" value="${aiDish.aiPrice}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">描述</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiDescription" value="${aiDish.aiDescription}" class="layui-input">  
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
