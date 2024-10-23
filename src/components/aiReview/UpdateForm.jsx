const UpdateForm = ({ aiReview }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">用户ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiUserUuid" value="${aiReview.ai_user_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">啤酒名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiBeerName" value="${aiReview.ai_beer_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">评论内容</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiContent" value="${aiReview.ai_content}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">评论日期</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiReviewDate" value="${aiReview.ai_review_date}" class="layui-input">  
      </div>  
    </div>  
  </div>  
  <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
    <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
    <button class="layui-btn" id="modalOk">确定</button>
  </div>
  </div>`;
};
export default UpdateForm;
