const RemoveForm = ({ aiUser }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">名字</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiUser.aiFirstname}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">姓氏</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiUser.aiLastname}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">电子邮件</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiUser.aiEmail}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">电话号码</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiUser.aiPhone}" class="layui-input" readonly>  
          </div>  
        </div>
        </div>
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>   
      </div>  
    `;
};
export default RemoveForm;
