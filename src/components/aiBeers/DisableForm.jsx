const DisableForm = ({ aiBeers }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">啤酒名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiBeerName" value="${aiBeers.aiBeerName}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">描述</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiDescription" value="${aiBeers.aiDescription}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">价格</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiPrice" value="${aiBeers.aiPrice}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
