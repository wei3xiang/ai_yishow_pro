const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">产品物理主键</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiProductUuid" placeholder="请输入产品物理主键"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">当前库存</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiCurrentStock" placeholder="请输入当前库存"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">最后更新时间</label>  
            <div class="layui-input-block">  
                <input type="text" name="aiLastUpdateTime" placeholder="请输入最后更新时间"  class="layui-input">  
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
