const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">花名</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_name" placeholder="请输入花名"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">品种</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_type" placeholder="请输入品种"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">描述</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_description" placeholder="请输入描述"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">价格</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_price" placeholder="请输入价格"  class="layui-input">  
            </div>  
            </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>  
      </div>  
    `;
};
export default CreateForm;
