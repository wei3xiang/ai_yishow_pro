const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">花束名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="flower_bunch_name" placeholder="请输入花束名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花束价格</label>  
            <div class="layui-input-block">  
                <input type="text" name="price" placeholder="请输入花束价格"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花束库存</label>  
            <div class="layui-input-block">  
                <input type="text" name="stock" placeholder="请输入花束库存"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花束描述</label>  
            <div class="layui-input-block">  
                <input type="text" name="description" placeholder="请输入花束描述"  class="layui-input">  
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
