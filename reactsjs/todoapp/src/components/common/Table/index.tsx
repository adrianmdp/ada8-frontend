import { FC } from "react";

type Props = {
  id: string;
  className: string;
  datatype: string;
};

const Table: FC<Props> = ({ id, className, datatype }) => {
  return (
    <table id={id} className={className} datatype={datatype}>
      <thead></thead>
      <tbody></tbody>
    </table>
  );
};

export { Table };
