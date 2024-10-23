const DisableForm = ({ aiOperationLog }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">日志类型</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiLogType" value="${aiOperationLog.ai_log_type}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">日志描述</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiLogDescription" value="${aiOperationLog.ai_log_description}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">日志时间</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiLogTime" value="${aiOperationLog.ai_log_time}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
