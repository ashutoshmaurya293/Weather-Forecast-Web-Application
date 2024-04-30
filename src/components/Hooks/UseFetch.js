import axios from "axios";
import React, { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [Data, setData] = useState();
  const [Loading, setLoading] = useState();
  const dataDownload = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    dataDownload();
  }, [url]);

  return { Data, Loading };
};

export default UseFetch;
