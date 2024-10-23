const RemoveForm = ({ aiFlower }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">花名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlower.ai_flower_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">花种类</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlower.ai_flower_type}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">花价格</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlower.ai_flower_price}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">花库存</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlower.ai_flower_stock}" class="layui-input" readonly>  
          </div>  
        </div>
        </div>
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>   
      </div>  
    `;
};
export default RemoveForm;
