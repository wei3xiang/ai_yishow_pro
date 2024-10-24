const UpdateForm = ({ aiPromotion }) => {
  return `<div class="layui-form" style="padding: 20px;">
      <div class="layui-form-item">  
      <label class="layui-form-label">促销活动名称</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiPromotionName" value="${aiPromotion.ai_promotion_name}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">促销开始日期</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiStartDate" value="${aiPromotion.ai_start_date}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">促销结束日期</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiEndDate" value="${aiPromotion.ai_end_date}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">折扣率</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiDiscount" value="${aiPromotion.ai_discount}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">适用时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiValidity" value="${aiPromotion.ai_validity}" class="layui-input">  
      </div>  
    </div>  
      <div class="layui-form-item">  
      <label class="layui-form-label">创建时间</label>  
      <div class="layui-input-block">  
        <input type="text" name="aiCreationTime" value="${aiPromotion.ai_creation_time}" class="layui-input">  
      </div>  
    </div>  
  </div>  
  <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
    <button class="layui-btn layui-btn-primary" id="modalCancel">取消</button>  
    <button class="layui-btn" id="modalOk">确定</button>
  </div>
  </div>`;
};
export default UpdateForm;
