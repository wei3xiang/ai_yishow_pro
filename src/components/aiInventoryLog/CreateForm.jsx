const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">库存UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_inventory_uuid" placeholder="请输入库存UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">操作原因</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_reason" placeholder="请输入操作原因"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">变动数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_change" placeholder="请输入变动数量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">变动日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_date" placeholder="请输入变动日期"  class="layui-input">  
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
