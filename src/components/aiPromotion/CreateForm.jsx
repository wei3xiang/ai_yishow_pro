const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">促销活动名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_promotion_name" placeholder="请输入促销活动名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">促销开始日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_start_date" placeholder="请输入促销开始日期"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">促销结束日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_end_date" placeholder="请输入促销结束日期"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">折扣率</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_discount" placeholder="请输入折扣率"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">适用时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_validity" placeholder="请输入适用时间"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">创建时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_creation_time" placeholder="请输入创建时间"  class="layui-input">  
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
