const DisableForm = ({ aiRoom }) => {
  return `  
      <div class="layui-form" style="padding: 20px;">  
          <div class="layui-form-item">  
            <label class="layui-form-label">房间号</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiRoomNumber" value="${aiRoom.ai_room_number}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">房间类型</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiRoomType" value="${aiRoom.ai_room_type}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">房间状态</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiRoomStatus" value="${aiRoom.ai_room_status}" class="layui-input" readonly>  
            </div>  
          </div>  
          <div class="layui-form-item">  
            <label class="layui-form-label">床位数</label>  
            <div class="layui-input-block">  
              <input type="text" name="aiBedCount" value="${aiRoom.ai_bed_count}" class="layui-input" readonly>  
            </div>  
          </div>  
      </div>  
      <div style="text-align: right; margin: 30px 0 10px; padding: 10px">  
        <button class="layui-btn layui-btn-primary" id="modalCancel">确定</button>   
      </div>  
    `;
};
export default DisableForm;
