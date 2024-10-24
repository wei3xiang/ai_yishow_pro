const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品类别</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_category" placeholder="请输入商品类别"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_product_name" placeholder="请输入商品名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品描述</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_desc" placeholder="请输入商品描述"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">创建时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_creation_time" placeholder="请输入创建时间"  class="layui-input">  
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
