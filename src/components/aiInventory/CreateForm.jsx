const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiProductId" placeholder="请输入产品ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiProductName" placeholder="请输入产品名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">库存</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiStock" placeholder="请输入库存"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">重订货级别</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiReorderLevel" placeholder="请输入重订货级别"  class="layui-input">  
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
