import React, { useState,useMemo } from "react";
import { Button } from "antd";
const Count = () => {
  const [count, setCount] = useState(0);
  console.log("组件重新渲染了");
  const reduce = () => {
    setCount(count - 1);
  };
  const add = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <Button type="primary" onClick={reduce}>
        -
      </Button>
        <span>{count}</span> 
      <Button type="primary" onClick={add}>
        +
      </Button>
    </div>
  );
};

export default Count;
