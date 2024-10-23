const RemoveForm = ({ aiFranchisee }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">加盟商名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFranchisee.ai_franchisee_name}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">加盟商联系人</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFranchisee.ai_franchisee_contact}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">加盟商联系电话</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFranchisee.ai_franchisee_phone}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">加盟商地址</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFranchisee.ai_franchisee_address}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">加盟商状态 (0-待审核, 1-审核通过, 2-审核不通过)</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFranchisee.ai_franchisee_status}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">加盟商开始合作日期</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFranchisee.ai_franchisee_start_date}" class="layui-input" readonly>  
          </div>  
        </div>
        <div class="layui-form-item">  
          <label class="layui-form-label">加盟商结束合作日期</label>  
          <div class="layui-input-block">  
            <input type="text" value="${aiFranchisee.ai_franchisee_end_date}" class="layui-input" readonly>  
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
