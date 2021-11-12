import { useState } from "react";
import RingLoader from "react-spinners/RingLoader";

const Loading = () => {
  const [loading, setLoading] = useState();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <RingLoader color="#CCC" loading={loading} size={20} />
    </div>
  );
};

export { Loading };
