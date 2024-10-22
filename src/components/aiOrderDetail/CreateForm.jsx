const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">订单物理主键</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiOrderUuid" placeholder="请输入订单物理主键"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品物理主键</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiProductUuid" placeholder="请输入产品物理主键"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiProductNum" placeholder="请输入产品数量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">总价</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiTotalPrice" placeholder="请输入总价"  class="layui-input">  
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
