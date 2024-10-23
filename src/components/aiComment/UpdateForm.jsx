const UpdateForm = ({ aiComment }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">产品UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiProductUuid" value="${aiComment.ai_product_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">客户UUID</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCustomerUuid" value="${aiComment.ai_customer_uuid}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">评论内容</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiContent" value="${aiComment.ai_content}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">评分 (0-5)</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiRating" value="${aiComment.ai_rating}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">评论日期</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiDate" value="${aiComment.ai_date}" class="layui-input">  
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
