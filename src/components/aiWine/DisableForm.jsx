const DisableForm = ({ aiWine }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">酒品编码</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiWineCode" value="${aiWine.aiWineCode}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">分类UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiCategoryUuid" value="${aiWine.aiCategoryUuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">酒品名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiWineName" value="${aiWine.aiWineName}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">酒品描述</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiDescription" value="${aiWine.aiDescription}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
