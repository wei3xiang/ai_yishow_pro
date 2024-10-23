const RemoveForm = ({ aiBrewery }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label"> Brewery 名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiBrewery.ai_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label"> Brewery 描述</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiBrewery.ai_description}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label"> Brewery 网站地址</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiBrewery.ai_website_url}" class="layui-input" readonly>  
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
