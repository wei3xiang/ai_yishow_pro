const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">酿酒日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_brewing_date" placeholder="请输入酿酒日期"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">酿酒商品ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_brewed_item_id" placeholder="请输入酿酒商品ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">酿酒记录</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_notes" placeholder="请输入酿酒记录"  class="layui-input">  
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
