const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">商家名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiName" placeholder="请输入商家名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商家地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiAddress" placeholder="请输入商家地址"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商家电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiPhone" placeholder="请输入商家电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商家邮箱</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiEmail" placeholder="请输入商家邮箱"  class="layui-input">  
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
