const RemoveForm = ({ aiWine }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">酒品编码</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiWine.aiWineCode}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">分类UUID</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiWine.aiCategoryUuid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">酒品名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiWine.aiWineName}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">酒品描述</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiWine.aiDescription}" class="layui-input" readonly>  
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
