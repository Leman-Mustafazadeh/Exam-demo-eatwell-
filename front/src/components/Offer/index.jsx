import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { deleteOne, getAll } from "../../API";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ContextDemo } from "../../context/DemoContext";
const Offer = () => {
    const {demos,setDemos,basket,setBasket} = useContext(ContextDemo)
//   const [demos, setDemos] = useState([]);

//   useEffect(() => {
//     getAll(endpoints.demo).then((res) => {
//       console.log(res.data);
//       setDemos(res.data);
//     });
//   }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async(result) => {
      if (result.isConfirmed) {
        await deleteOne(endpoints.demo,id)
        const del = demos.filter((x) => x._id !== id);
        console.log(del);
        setDemos(del);
        console.log(demos);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const [filter,setFilter] = useState(demos)
const handleSubmit=(inpValue)=>{
    const search = demos.filter((x)=>x.name.toLowerCase().trim().includes(inpValue.toLowerCase().trim()))
    setFilter(search)
}
useEffect(()=>{
  setFilter(demos)

},[demos])



const sortByPrice=(value)=>{

  const sorted = [...filter]
  if(value=='a'){
    sorted.sort((a,z)=>a.price-z.price)
    
  }else if(value=='z'){
    sorted.sort((a,z)=>z.price-a.price)
  
  }
  setFilter(sorted)
}



const handleBasket=(demo)=>{
  const target = basket.find((x)=>x._id==demo._id)
  if(target){
    target.count+=1,
    target.totalPrice= target.count*target.price
    setBasket([...basket])
    localStorage.setItem("basket",JSON.stringify([...basket]))
  }else{
    const newItem = {
      count:1,
      totalPrice:demo.price,
      ...demo
    }
setBasket([...basket,newItem])
localStorage.setItem("basket",JSON.stringify([...basket,newItem]))

  }
}

  return (
    <section>
      <div className="container">
        <div className={styles.offer_head}>
          <h5>OUR OFFERS</h5>
          <h1>Our Offer This Summer</h1>
          <h6>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </h6>

          <input type="text" placeholder="Search ..." onChange={(e)=>handleSubmit(e.target.value)} />

          <select name="" id="" onChange={(e)=>sortByPrice(e.target.value)} style={{margin:'0 20px'}}>
            <option value="a">Min Price</option>
            <option value="z">Max Price</option>
          </select>


          <button
            style={{
              backgroundColor: "pink",
              borderColor: "transparent",
              padding: "3px 7px",
            }}
          >
            <Link
              to={"/adddemo"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Add Demo
            </Link>
          </button>
          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className={styles.mySwiper}
            >
              { filter && filter.map((item) => {
                return (
                  <SwiperSlide className={styles.cards} key={item._id}>
                    <img src={item.imgSrc} alt="" />
                    <p>${item.price}</p>
                    <h3>{item.name}</h3>
                    <h4>{item.title}</h4>
                    <button>Order Now</button>
                    <button onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>

                    <button >
                      <Link style={{textDecoration:'none',color:"white"}} to={"/demodetail/"+item._id}>Detail</Link>
                    </button>
                    <button onClick={()=>handleBasket(item)}>Basket</button>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
