const DisableForm = ({ aiBrewery }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label"> Brewery 名称</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiName" value="${aiBrewery.ai_name}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label"> Brewery 描述</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiDescription" value="${aiBrewery.ai_description}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label"> Brewery 网站地址</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiWebsiteUrl" value="${aiBrewery.ai_website_url}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
