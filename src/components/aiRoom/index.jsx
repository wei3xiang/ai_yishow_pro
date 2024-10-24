import React, { useState } from "react";
import data from "../data/ai_room.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiRoom) => {
    const modalContent = `${UpdateForm({ aiRoom: aiRoom })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiRoom,
              aiRoomNumber: layero.find('input[name="aiRoomNumber"]').val(), 
              aiRoomType: layero.find('input[name="aiRoomType"]').val(), 
              aiRoomStatus: layero.find('input[name="aiRoomStatus"]').val(), 
              aiBedCount: layero.find('input[name="aiBedCount"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiRoom) => {
    const modalContent = `${DisableForm({ aiRoom: aiRoom })}`;
    layui.layer.open({
      type: 1,
      title: "查看",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
      },
    });
  };

  const handleRemove = (aiRoom) => {
    const modalContent = `${RemoveForm({ aiRoom: aiRoom })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiRoom.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiRoomNumber: "",  aiRoomType: "",  aiRoomStatus: "",  aiBedCount: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiRoomNumber = layero.find('input[name="aiRoomNumber"]').val();
          const aiRoomType = layero.find('input[name="aiRoomType"]').val();
          const aiRoomStatus = layero.find('input[name="aiRoomStatus"]').val();
          const aiBedCount = layero.find('input[name="aiBedCount"]').val();
          setList([...list, { ...newItem, uuid: Date.now(), aiRoomNumber,aiRoomType,aiRoomStatus,aiBedCount, }]);
          layui.layer.close(index);
        });
      },
    });
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "white", borderRadius: "10px" }}>
      <List
        data = {list}
        onClickCreate={() => handleCreate()}
        onClickRemove={(user) => handleRemove(user)}
        onClickDetail={(user) => handleDetail(user)}
        onClickUpdate={(user) => handleEdit(user)}
      />
    </div>
  );
};

export default Index;
