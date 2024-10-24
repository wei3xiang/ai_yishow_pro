const RemoveForm = ({ aiFlower }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">花名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlower.ai_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">品种</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlower.ai_type}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">描述</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlower.ai_description}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">价格</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFlower.ai_price}" class="layui-input" readonly>  
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
