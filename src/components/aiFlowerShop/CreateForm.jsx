const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">商店编号</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_id" placeholder="请输入商店编号"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商店名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_name" placeholder="请输入商店名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商店地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_address" placeholder="请输入商店地址"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商店电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_phone" placeholder="请输入商店电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商店开门时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_open_time" placeholder="请输入商店开门时间"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商店关门时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_close_time" placeholder="请输入商店关门时间"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商店纬度</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_latitude" placeholder="请输入商店纬度"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商店经度</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_longitude" placeholder="请输入商店经度"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">商店描述</label>  
            <div class="layui-input-block">  
                <input type="text" name="shop_description" placeholder="请输入商店描述"  class="layui-input">  
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
