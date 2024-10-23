const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">酿造商的 UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_brewery_uuid" placeholder="请输入酿造商的 UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">啤酒名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_name" placeholder="请输入啤酒名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">啤酒风格</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_style" placeholder="请输入啤酒风格"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">酒精度</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_abv" placeholder="请输入酒精度"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">绝苦值</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_ibu" placeholder="请输入绝苦值"  class="layui-input">  
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
