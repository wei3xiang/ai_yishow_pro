const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">酒品编码</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiWineCode" placeholder="请输入酒品编码"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">分类UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiCategoryUuid" placeholder="请输入分类UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">酒品名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiWineName" placeholder="请输入酒品名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">酒品描述</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiDescription" placeholder="请输入酒品描述"  class="layui-input">  
            </div>  
            </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; spadding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>  
      </div>  
    `;
};
export default CreateForm;
