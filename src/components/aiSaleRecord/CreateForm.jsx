const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">销售时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="sale_time" placeholder="请输入销售时间"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">销售地点</label>  
            <div class="layui-input-block">  
                <input type="text" name="sale_location" placeholder="请输入销售地点"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">客户姓名</label>  
            <div class="layui-input-block">  
                <input type="text" name="customer_name" placeholder="请输入客户姓名"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">花卉名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="flower_name" placeholder="请输入花卉名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">销售数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="quantity" placeholder="请输入销售数量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">本次销售费用</label>  
            <div class="layui-input-block">  
                <input type="text" name="price_paid" placeholder="请输入本次销售费用"  class="layui-input">  
            </div>  
            </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
        <button class="layui-btn" id="modalOk">确定</button>  
      </div>  
    `;
};
export default CreateForm;
