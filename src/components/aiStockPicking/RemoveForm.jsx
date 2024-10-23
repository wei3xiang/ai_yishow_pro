const RemoveForm = ({ aiStockPicking }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">订单ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiStockPicking.ai_order_id}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">产品ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiStockPicking.ai_product_id}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">数量</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiStockPicking.ai_quantity}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">备注</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiStockPicking.ai_notes}" class="layui-input" readonly>  
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
