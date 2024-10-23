const UpdateForm = ({ aiFlower }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">花产品名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiFlowerName" value="${aiFlower.ai_flower_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花产品价格</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiFlowerPrice" value="${aiFlower.ai_flower_price}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花产品图片路径</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiFlowerImage" value="${aiFlower.ai_flower_image}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花产品分类</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiFlowerCategory" value="${aiFlower.ai_flower_category}" class="layui-input">  
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
