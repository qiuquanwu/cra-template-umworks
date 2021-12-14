import React, { useEffect } from "react";
import fetch from "unfetch";
import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
const About = () => {
  const { data, error } = useSWR(
    "http://www.liulongbin.top:3005/api/getlunbo",
    fetcher
  );
  useEffect(() => {
    console.log("执行了");
    return () => {
      console.log("不执行了");
    };
  }, []);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div>
      {data.message.map((item, index) => {
        return (
          <div key={index}>
            <a href={item.url}>
              <img src={item.img}></img>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default About;
