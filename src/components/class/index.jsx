import React, { useState } from "react";
import data from "./data.json";

const ClassList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [classes, setClasses] = useState(data);

  const filteredClasses = classes.filter(
    (cls) =>
      cls.className.includes(searchTerm) || cls.teacher.includes(searchTerm)
  );

  const handleShowModal = (cls, editMode) => {
    const isEdit = editMode ? "" : "readonly";
    const modalContent = `  
      <form class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">班级名称</label>  
          <div class="layui-input-block">  
            <input type="text" name="className" value="${
              cls.className
            }" class="layui-input" ${isEdit}>  
          </div>  
        </div>  
        <div class="layui-form-item">  
          <label class="layui-form-label">班主任名</label>  
          <div class="layui-input-block">  
            <input type="text" name="teacher" value="${
              cls.teacher
            }" class="layui-input" ${isEdit}>  
          </div>  
        </div>  
        <div class="layui-form-item">  
          <label class="layui-form-label">班级人数</label>  
          <div class="layui-input-block">  
            <input type="number" name="studentCount" value="${
              cls.studentCount
            }" class="layui-input" ${isEdit}>  
          </div>  
        </div>  
        <div style="text-align: right; margin: 30px 0 10px;">  
          <button class="layui-btn layui-btn-primary" type="button" id="modalCancel">取消</button>  
          ${
            editMode
              ? '<button class="layui-btn" type="submit" id="modalOk">确定</button>'
              : ""
          }  
        </div>  
      </form>  
    `;

    layui.layer.open({
      type: 1,
      title: editMode ? "编辑班级" : "查看班级",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        if (editMode) {
          layero.find("form").on("submit", function (e) {
            e.preventDefault();
            const updatedClass = {
              ...cls,
              className: layero.find('input[name="className"]').val(),
              teacher: layero.find('input[name="teacher"]').val(),
              studentCount: parseInt(
                layero.find('input[name="studentCount"]').val(),
                10
              ),
            };
            setClasses(
              classes.map((c) => (c.id === updatedClass.id ? updatedClass : c))
            );
            layui.layer.close(index);
          });
        }
      },
    });
  };

  const handleShowDeleteModal = (cls) => {
    const modalContent = `  
      <form class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">班级名称</label>  
          <div class="layui-input-block">  
            <input type="text" value="${cls.className}" class="layui-input" readonly>  
          </div>  
        </div>  
        <div class="layui-form-item">  
          <label class="layui-form-label">班主任名</label>  
          <div class="layui-input-block">  
            <input type="text" value="${cls.teacher}" class="layui-input" readonly>  
          </div>  
        </div>  
        <div class="layui-form-item">  
          <label class="layui-form-label">班级人数</label>  
          <div class="layui-input-block">  
            <input type="number" value="${cls.studentCount}" class="layui-input" readonly>  
          </div>  
        </div>  
        <div style="text-align: right; margin: 30px 0 10px;">  
          <button class="layui-btn layui-btn-primary" type="button" id="modalCancel">取消</button>  
          <button class="layui-btn layui-btn-danger" type="button" id="modalOk">确定</button>  
        </div>  
      </form>  
    `;

    layui.layer.open({
      type: 1,
      title: "确认删除",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("#modalOk").on("click", () => {
          setClasses(classes.filter((c) => c.id !== cls.id));
          layui.layer.close(index);
        });
      },
    });
  };

  const handleAddClass = () => {
    const newClass = {
      id: classes.length + 1,
      className: "",
      teacher: "",
      studentCount: "",
    };
    const modalContent = `  
      <form class="layui-form" style="padding: 20px;">  
        <div class="layui-form-item">  
          <label class="layui-form-label">班级名称</label>  
          <div class="layui-input-block">  
            <input type="text" name="className" placeholder="请输入班级名称" class="layui-input">  
          </div>  
        </div>  
        <div class="layui-form-item">  
          <label class="layui-form-label">班主任名</label>  
          <div class="layui-input-block">  
            <input type="text" name="teacher" placeholder="请输入班主任名" class="layui-input">  
          </div>  
        </div>  
        <div class="layui-form-item">  
          <label class="layui-form-label">班级人数</label>  
          <div class="layui-input-block">  
            <input type="number" name="studentCount" placeholder="请输入班级人数" class="layui-input">  
          </div>  
        </div>  
        <div style="text-align: right; margin: 30px 0 10px;">  
          <button class="layui-btn layui-btn-primary" type="button" id="modalCancel">取消</button>  
          <button class="layui-btn" type="submit" id="modalOk">确定</button>  
        </div>  
      </form>  
    `;

    layui.layer.open({
      type: 1,
      title: "新增班级",
      area: ["500px", "350px"],
      content: modalContent,
      success: function (layero, index) {
        layero.find("#modalCancel").on("click", () => layui.layer.close(index));
        layero.find("form").on("submit", function (e) {
          e.preventDefault();
          const className = layero.find('input[name="className"]').val();
          const teacher = layero.find('input[name="teacher"]').val();
          const studentCount = layero.find('input[name="studentCount"]').val();
          if (className && teacher && studentCount) {
            setClasses([
              ...classes,
              {
                ...newClass,
                className,
                teacher,
                studentCount: Number(studentCount),
              },
            ]);
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
      <div className="layui-panel">
        <div
          className="layui-form"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <div className="layui-form-item" style={{ flex: "1" }}>
            <input
              type="text"
              placeholder="输入班级名称或班主任名"
              className="layui-input"
              style={{ boxShadow: "none", borderRadius: "0", border: "none" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="layui-btn" onClick={() => setSearchTerm("")}>
            重置
          </button>
          <button
            className="layui-btn layui-btn-normal"
            onClick={handleAddClass}
          >
            新增
          </button>
        </div>
      </div>

      <table
        className="layui-table"
        lay-filter="test"
        style={{ border: "none", backgroundColor: "transparent" }}
      >
        <thead>
          <tr>
            <th>班级名称</th>
            <th>班主任名</th>
            <th>班级人数</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {filteredClasses.map((cls) => (
            <tr key={cls.id}>
              <td>{cls.className}</td>
              <td>{cls.teacher}</td>
              <td>{cls.studentCount}</td>
              <td>
                <button
                  className="layui-btn layui-btn-xs layui-btn-normal"
                  onClick={() => handleShowModal(cls, false)}
                >
                  查看
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-warm"
                  onClick={() => handleShowModal(cls, true)}
                >
                  编辑
                </button>
                <button
                  className="layui-btn layui-btn-xs layui-btn-danger"
                  onClick={() => handleShowDeleteModal(cls)}
                >
                  删除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassList;
