const UpdateForm = ({ aiFlower }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">花名</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiFlowerName" value="${aiFlower.ai_flower_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花类型</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiFlowerType" value="${aiFlower.ai_flower_type}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花价格</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiFlowerPrice" value="${aiFlower.ai_flower_price}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花图片URL</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiFlowerImgUrl" value="${aiFlower.ai_flower_img_url}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">库存数量</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiStockQuantity" value="${aiFlower.ai_stock_quantity}" class="layui-input">  
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
