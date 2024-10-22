const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">供应商名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiSuppName" placeholder="请输入供应商名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">供应商邮箱</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiSuppEmail" placeholder="请输入供应商邮箱"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">供应商电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiSuppPhone" placeholder="请输入供应商电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">供应商地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiSuppAddress" placeholder="请输入供应商地址"  class="layui-input">  
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
