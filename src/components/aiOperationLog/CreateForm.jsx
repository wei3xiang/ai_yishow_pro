const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">日志类型</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_log_type" placeholder="请输入日志类型"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">日志描述</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_log_description" placeholder="请输入日志描述"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">日志时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_log_time" placeholder="请输入日志时间"  class="layui-input">  
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
