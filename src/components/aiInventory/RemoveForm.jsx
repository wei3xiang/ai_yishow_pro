const RemoveForm = ({ aiInventory }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">产品物理主键</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.aiProductUuid}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">当前库存</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.aiCurrentStock}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">最后更新时间</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiInventory.aiLastUpdateTime}" class="layui-input" readonly>  
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
