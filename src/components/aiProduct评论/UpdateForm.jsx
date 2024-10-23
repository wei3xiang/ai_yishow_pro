const UpdateForm = ({ aiProduct评论 }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">产品ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductId" value="${aiProduct评论.ai_product_id}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">用户ID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiUserId" value="${aiProduct评论.ai_user_id}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">评论内容</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiContent" value="${aiProduct评论.ai_content}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">评分</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiRating" value="${aiProduct评论.ai_rating}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">创建时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCreatedAt" value="${aiProduct评论.ai_created_at}" class="layui-input">  
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
