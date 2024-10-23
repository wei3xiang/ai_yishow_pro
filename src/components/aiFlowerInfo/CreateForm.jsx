const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">花卉名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="flower_name" placeholder="请输入花卉名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花卉种类</label>  
            <div class="layui-input-block">  
                <input type="text" name="flower_type" placeholder="请输入花卉种类"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">原产地</label>  
            <div class="layui-input-block">  
                <input type="text" name="origin_country" placeholder="请输入原产地"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">价格</label>  
            <div class="layui-input-block">  
                <input type="text" name="price" placeholder="请输入价格"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">库存量</label>  
            <div class="layui-input-block">  
                <input type="text" name="stock" placeholder="请输入库存量"  class="layui-input">  
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
