const CreateForm = () => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
            <div class="layui-form-item">  
            <label class="layui-form-label">加盟商名称</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_franchisee_name" placeholder="请输入加盟商名称"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">加盟商联系人</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_franchisee_contact" placeholder="请输入加盟商联系人"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">加盟商联系电话</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_franchisee_phone" placeholder="请输入加盟商联系电话"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">加盟商地址</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_franchisee_address" placeholder="请输入加盟商地址"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">加盟商状态 (0-待审核, 1-审核通过, 2-审核不通过)</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_franchisee_status" placeholder="请输入加盟商状态 (0-待审核, 1-审核通过, 2-审核不通过)"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">加盟商开始合作日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_franchisee_start_date" placeholder="请输入加盟商开始合作日期"  class="layui-input">  
            </div>  
            </div>  
            <div class="layui-form-item">  
            <label class="layui-form-label">加盟商结束合作日期</label>  
            <div class="layui-input-block">  
                <input type="text" name="ai_franchisee_end_date" placeholder="请输入加盟商结束合作日期"  class="layui-input">  
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
