import { FC, useEffect, useState } from "react";
import { Layout } from "../../components";
import { Table } from "../../components/common/Table";

const Tasks: FC = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    console.log("mount");
    const onMouseMove = (e: any) => {
      if (e.clientX < window.innerWidth / 2) {
        setColor("red");
      } else {
        setColor("blue");
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      console.log("unmount");
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [color]);

  return (
    <Layout mainClass="tasks">
      {color}
      <Table id="" className="" datatype="" />
    </Layout>
  );
};

export { Tasks };
