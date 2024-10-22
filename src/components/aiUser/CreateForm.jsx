const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">名字</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiFirstname" placeholder="请输入名字"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">姓氏</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiLastname" placeholder="请输入姓氏"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">电子邮件</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiEmail" placeholder="请输入电子邮件"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">电话号码</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiPhone" placeholder="请输入电话号码"  class="layui-input">  
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
