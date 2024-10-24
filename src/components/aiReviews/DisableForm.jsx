const DisableForm = ({ aiReviews }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">商品ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiProductUuid" value="${aiReviews.ai_product_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">用户ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUserUuid" value="${aiReviews.ai_user_uuid}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">评价内容</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiReviewText" value="${aiReviews.ai_review_text}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">评分</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiRating" value="${aiReviews.ai_rating}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
