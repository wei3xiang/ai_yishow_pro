const DisableForm = ({ aiSaleRecord }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">销售时间</label>  
            <div class="layui-input-block">  
              <input type="text" name="saleTime" value="${aiSaleRecord.sale_time}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">销售地点</label>  
            <div class="layui-input-block">  
              <input type="text" name="saleLocation" value="${aiSaleRecord.sale_location}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">客户姓名</label>  
            <div class="layui-input-block">  
              <input type="text" name="customerName" value="${aiSaleRecord.customer_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">花卉名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="flowerName" value="${aiSaleRecord.flower_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">销售数量</label>  
            <div class="layui-input-block">  
              <input type="text" name="quantity" value="${aiSaleRecord.quantity}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">本次销售费用</label>  
            <div class="layui-input-block">  
              <input type="text" name="pricePaid" value="${aiSaleRecord.price_paid}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
