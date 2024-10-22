const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">用户ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiUserId" placeholder="请输入用户ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiOrderId" placeholder="请输入订单ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">用餐日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiMealDate" placeholder="请输入用餐日期"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">用餐时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiMealTime" placeholder="请输入用餐时间"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品ID</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiProductId" placeholder="请输入商品ID"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiQuantity" placeholder="请输入数量"  class="layui-input">  
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
