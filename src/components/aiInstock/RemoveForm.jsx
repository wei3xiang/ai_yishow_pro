const RemoveForm = ({ aiInstock }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">产品ID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInstock.aiProductId}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">产品名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInstock.aiProductName}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">库存数量</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInstock.aiStockQuantity}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">最后更新时间</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInstock.aiLastUpdate}" class="layui-input" readonly>  
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
