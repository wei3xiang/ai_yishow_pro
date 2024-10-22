const DisableForm = ({ aiComment }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">用户UUID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUserUuid" value="${aiComment.aiUserUuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">产品编码</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductCode" value="${aiComment.aiProductCode}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">评论内容</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiCommentContent" value="${aiComment.aiCommentContent}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">评分</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiRating" value="${aiComment.aiRating}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
