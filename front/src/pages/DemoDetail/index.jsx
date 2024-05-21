import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getOne } from "../../API";
import { Helmet } from "react-helmet";

const DemoDetail = () => {
  const { id } = useParams();
  const [getData, setGetData] = useState({
    imgSrc: '',
    price: "",
    name: "",
    title: "",
  });
  useEffect(()=>{
   getOne(id).then((res)=>{
    setGetData(res.data)
   })
  },[id])
  return (
  <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Demos Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      {
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',padding:'120px 0'}}>
        <button>  <Link to={"/"}>Go Back</Link></button>
          <img src={getData.imgSrc} alt="" />
          <p>PRICE:${getData.price}</p>
          <h2>NAME:{getData.name}</h2>
          <h5>TITLE:{getData.title}</h5>
        </div>
      }
  </>
   
  );
};

export default DemoDetail;
