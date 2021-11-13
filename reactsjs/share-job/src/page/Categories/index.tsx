import { FC } from "react";
import { WithAuth } from "../../hoc";

const CategoriesPage: FC = () => {
  return <>Categories</>;
};

export const Categories = WithAuth(CategoriesPage);
