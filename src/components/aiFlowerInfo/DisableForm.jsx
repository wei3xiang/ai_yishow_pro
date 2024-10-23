const DisableForm = ({ aiFlowerInfo }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">花卉名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="flowerName" value="${aiFlowerInfo.flower_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花卉种类</label>  
            <div class="layui-input-block">  
              <input type="text" name="flowerType" value="${aiFlowerInfo.flower_type}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">原产地</label>  
            <div class="layui-input-block">  
              <input type="text" name="originCountry" value="${aiFlowerInfo.origin_country}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">价格</label>  
            <div class="layui-input-block">  
              <input type="text" name="price" value="${aiFlowerInfo.price}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">库存量</label>  
            <div class="layui-input-block">  
              <input type="text" name="stock" value="${aiFlowerInfo.stock}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
