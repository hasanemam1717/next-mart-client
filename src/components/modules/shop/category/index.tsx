import React from "react";
import CreateCategoryModal from "./CreateCategoryModal";

const ManageCategories = () => {
  return (
    <div className="flex items-center justify-between">
      <h1>Manage Categories </h1>
      <CreateCategoryModal></CreateCategoryModal>
    </div>
  );
};

export default ManageCategories;
