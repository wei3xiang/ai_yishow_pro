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
            <label class="layui-form-label">啤酒的 UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_beer_uuid" placeholder="请输入啤酒的 UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">库存数量（升）</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_amount" placeholder="请输入库存数量（升）"  class="layui-input">  
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
