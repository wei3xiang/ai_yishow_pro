const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_product_uuid" placeholder="请输入产品UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_customer_uuid" placeholder="请输入客户UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">评论内容</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_content" placeholder="请输入评论内容"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">评分 (0-5)</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_rating" placeholder="请输入评分 (0-5)"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">评论日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_date" placeholder="请输入评论日期"  class="layui-input">  
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
