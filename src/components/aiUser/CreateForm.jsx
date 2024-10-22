const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">用户名</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiUsername" placeholder="请输入用户名"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">密码（哈希值）</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiPasswordHash" placeholder="请输入密码（哈希值）"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">邮箱</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiEmail" placeholder="请输入邮箱"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiPhone" placeholder="请输入电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiAddress" placeholder="请输入地址"  class="layui-input">  
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
