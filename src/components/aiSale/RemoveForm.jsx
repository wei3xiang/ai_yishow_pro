const RemoveForm = ({ aiSale }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">销售编号</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSale.ai_sale_number}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">花店编号</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSale.ai_shop_number}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">销售日期</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSale.ai_sale_date}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">销售金额</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSale.ai_revenue}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">客户姓名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSale.ai_customer_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">客户电话</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSale.ai_customer_phone}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">商品编号</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiSale.ai_product_number}" class="layui-input" readonly>  
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
