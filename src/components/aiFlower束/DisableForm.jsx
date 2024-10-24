const DisableForm = ({ aiFlower束 }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">花束名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="flowerBunchName" value="${aiFlower束.flower_bunch_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花束价格</label>  
            <div class="layui-input-block">  
              <input type="text" name="price" value="${aiFlower束.price}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花束库存</label>  
            <div class="layui-input-block">  
              <input type="text" name="stock" value="${aiFlower束.stock}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花束描述</label>  
            <div class="layui-input-block">  
              <input type="text" name="description" value="${aiFlower束.description}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
