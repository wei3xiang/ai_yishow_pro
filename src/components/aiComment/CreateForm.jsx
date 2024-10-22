const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">用户UUID</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiUserUuid" placeholder="请输入用户UUID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品编码</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiProductCode" placeholder="请输入产品编码"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">评论内容</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiCommentContent" placeholder="请输入评论内容"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">评分</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiRating" placeholder="请输入评分"  class="layui-input">  
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
