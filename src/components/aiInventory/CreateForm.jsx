const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">啤酒ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiBeerId" placeholder="请输入啤酒ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">瓶装数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiBottleQuantity" placeholder="请输入瓶装数量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">罐装数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiCanQuantity" placeholder="请输入罐装数量"  class="layui-input">  
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
