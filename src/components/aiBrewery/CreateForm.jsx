const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label"> Brewery 名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_name" placeholder="请输入 Brewery 名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label"> Brewery 描述</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_description" placeholder="请输入 Brewery 描述"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label"> Brewery 网站地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_website_url" placeholder="请输入 Brewery 网站地址"  class="layui-input">  
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
