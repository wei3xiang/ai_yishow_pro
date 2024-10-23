const DisableForm = ({ aiUserPaymentRecords }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">用户ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiUserId" value="${aiUserPaymentRecords.ai_user_id}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">交易ID</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiTransactionId" value="${aiUserPaymentRecords.ai_transaction_id}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">交易金额</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiTransactionAmount" value="${aiUserPaymentRecords.ai_transaction_amount}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">交易日期</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiTransactionDate" value="${aiUserPaymentRecords.ai_transaction_date}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
