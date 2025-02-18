import ManageCategories from "@/components/modules/shop/category";
import { getAllCategories } from "@/services/shop/category";
import React from "react";

const ShopCategoryPage = async () => {
  const { data, meta } = await getAllCategories();
  console.log(data);
  return (
    <div>
      <ManageCategories categories={data}></ManageCategories>
    </div>
  );
};

export default ShopCategoryPage;
