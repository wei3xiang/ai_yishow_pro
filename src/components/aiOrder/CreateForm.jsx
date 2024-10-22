const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">用户ID（关联用户表的uuid字段）</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_user_uuid" placeholder="请输入用户ID（关联用户表的uuid字段）"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品ID（关联商品表的uuid字段）</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_product_uuid" placeholder="请输入商品ID（关联商品表的uuid字段）"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商品数量</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_quantity" placeholder="请输入商品数量"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">总价</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_price" placeholder="请输入总价"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">创建时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_create_time" placeholder="请输入创建时间"  class="layui-input">  
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
