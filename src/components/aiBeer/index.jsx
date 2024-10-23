import React, { useState } from "react";
import data from "../data/ai_beer.json";

import List from "./List";
import UpdateForm from "./UpdateForm";
import DisableForm from "./DisableForm";
import RemoveForm from "./RemoveForm";
import CreateForm from "./CreateForm";

const Index = () => {
  const [list, setList] = useState(data);

  const handleEdit = (aiBeer) => {
    const modalContent = `${UpdateForm({ aiBeer: aiBeer })}`;
    layui.layer.open({
      type: 1,
      title: "编辑",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          const updatedItem = {
            ...aiBeer,
              aiBreweryUuid: layero.find('input[name="aiBreweryUuid"]').val(), 
              aiName: layero.find('input[name="aiName"]').val(), 
              aiStyle: layero.find('input[name="aiStyle"]').val(), 
              aiAbv: layero.find('input[name="aiAbv"]').val(), 
              aiIbu: layero.find('input[name="aiIbu"]').val(), 
          };
          setList(
            list.map((u) => (u.uuid === updatedItem.uuid ? updatedItem : u))
          );
          layui.layer.close(index);
        });
      },
    });
  };

  const handleDetail = (aiBeer) => {
    const modalContent = `${DisableForm({ aiBeer: aiBeer })}`;
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

  const handleRemove = (aiBeer) => {
    const modalContent = `${RemoveForm({ aiBeer: aiBeer })}`;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setList(list.filter((u) => u.uuid !== aiBeer.uuid));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleCreate = () => {
    const newItem = { uuid: "",  aiBreweryUuid: "",  aiName: "",  aiStyle: "",  aiAbv: "",  aiIbu: "", };
    const modalContent = `${CreateForm()}`;

    layui.layer.open({
      type: 1,
      title: "新增",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {

          const aiBreweryUuid = layero.find('input[name="aiBreweryUuid"]').val();
          const aiName = layero.find('input[name="aiName"]').val();
          const aiStyle = layero.find('input[name="aiStyle"]').val();
          const aiAbv = layero.find('input[name="aiAbv"]').val();
          const aiIbu = layero.find('input[name="aiIbu"]').val();
           if (
           aiBreweryUuid &&

           aiName &&

           aiStyle &&

           aiAbv &&

           
           ) {
            setList([...list, { ...newItem, uuid: Date.now(), aiBreweryUuid,
          aiName,
          aiStyle,
          aiAbv,
          aiIbu,
           }]);
            layui.layer.close(index);
          } else {
            layui.layer.msg("请填写完整信息", { icon: 5 });
          }
        });
      },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
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
