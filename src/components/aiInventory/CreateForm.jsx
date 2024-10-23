const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">啤酒名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_beer_name" placeholder="请输入啤酒名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">类型</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_type" placeholder="请输入类型"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">制造商</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_manufacturer" placeholder="请输入制造商"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">容量</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_volume" placeholder="请输入容量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">库存量</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_quantity" placeholder="请输入库存量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">单价</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_price" placeholder="请输入单价"  class="layui-input">  
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
