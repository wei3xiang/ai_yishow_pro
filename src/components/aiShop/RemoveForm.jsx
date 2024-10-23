const RemoveForm = ({ aiShop }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">店铺名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiShop.ai_shop_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">店铺负责人</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiShop.ai_shop_contact}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">店铺地址</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiShop.ai_shop_address}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">店铺电话</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiShop.ai_shop_phone}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">店铺邮箱</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiShop.ai_shop_email}" class="layui-input" readonly>  
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
