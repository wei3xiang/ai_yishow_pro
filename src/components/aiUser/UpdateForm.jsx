const UpdateForm = ({ aiUser }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">用户名</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiUsername" value="${aiUser.aiUsername}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">密码（哈希值）</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiPasswordHash" value="${aiUser.aiPasswordHash}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">邮箱</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiEmail" value="${aiUser.aiEmail}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">电话</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiPhone" value="${aiUser.aiPhone}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">地址</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiAddress" value="${aiUser.aiAddress}" class="layui-input">  
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
