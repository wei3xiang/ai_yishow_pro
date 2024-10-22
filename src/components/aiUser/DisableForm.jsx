const DisableForm = ({ aiUser }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">用户名</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUsername" value="${aiUser.aiUsername}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">密码</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiPassword" value="${aiUser.aiPassword}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">邮箱</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiEmail" value="${aiUser.aiEmail}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">电话</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiPhone" value="${aiUser.aiPhone}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">地址</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiAddress" value="${aiUser.aiAddress}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">性别</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiGender" value="${aiUser.aiGender}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">出生日期</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiDateOfBirth" value="${aiUser.aiDateOfBirth}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">余额</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiBalance" value="${aiUser.aiBalance}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">注册IP</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiRegIp" value="${aiUser.aiRegIp}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">最后一次登录IP</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiLastLoginIp" value="${aiUser.aiLastLoginIp}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">最后一次登录时间</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiLastLoginTime" value="${aiUser.aiLastLoginTime}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
