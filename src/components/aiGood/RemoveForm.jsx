const RemoveForm = ({ aiGood }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">商品名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiGood.ai_good_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">商品价格</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiGood.ai_good_price}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">商品库存</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiGood.ai_good_stock}" class="layui-input" readonly>  
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
