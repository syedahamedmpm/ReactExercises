import React, { useState, useEffect } from "react";
const commonApiCall = (WrappedComponent, url) => {
  return function EnhancedComponent(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, [url]);

    if (loading) {
      return <p>Loading...</p>;
    }
    // pass fetched data as a prop
    return <WrappedComponent {...props} data={data} />;
  };
};

export default commonApiCall;
