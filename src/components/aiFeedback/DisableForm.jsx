const DisableForm = ({ aiFeedback }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">用户UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUserUuid" value="${aiFeedback.ai_user_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">反馈内容</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiFeedbackContent" value="${aiFeedback.ai_feedback_content}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">评分</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiScore" value="${aiFeedback.ai_score}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">反馈状态</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiFeedbackStatus" value="${aiFeedback.ai_feedback_status}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">创建时间</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiCreationTime" value="${aiFeedback.ai_creation_time}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
