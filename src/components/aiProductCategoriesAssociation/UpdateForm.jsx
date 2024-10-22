const UpdateForm = ({ aiProductCategoriesAssociation }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">产品ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductId" value="${aiProductCategoriesAssociation.aiProductId}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">类别ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCategoryId" value="${aiProductCategoriesAssociation.aiCategoryId}" class="layui-input">  
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
