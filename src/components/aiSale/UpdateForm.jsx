const UpdateForm = ({ aiSale }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">销售编号</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiSaleNumber" value="${aiSale.ai_sale_number}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">花店编号</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiShopNumber" value="${aiSale.ai_shop_number}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">销售日期</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiSaleDate" value="${aiSale.ai_sale_date}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">销售金额</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiRevenue" value="${aiSale.ai_revenue}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">客户姓名</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCustomerName" value="${aiSale.ai_customer_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">客户电话</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCustomerPhone" value="${aiSale.ai_customer_phone}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">商品编号</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductNumber" value="${aiSale.ai_product_number}" class="layui-input">  
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
