import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card";

function Projects() {
  const [cardData, setCardData] = useState([]);

  let fetchdata = async () => {
    try {
      let { data } = await axios.get(
        "https://61eeed07d593d20017dbb208.mockapi.io/form/demosite"
      );
      setCardData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <section className="container">
      <div className="row">
        {cardData.map((item) => {
          return (
            <div className="col-md-4 mt-5 d-flex flex-wrap">
              <Card data={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;

// [{
//   "id":1,
//   "title":"Residential House",
//   "pic":"https://3.imimg.com/data3/HV/BG/MY-3585527/residential-house-500x500.jpeg"
// },
// {
//   "id":2,
//   "title":"Residential flats",
//   "pic":"https://www.nkrealtors.com/blog/wp-content/uploads/2017/01/Buying-a-flat-in-Kolkata.jpg"
// },
// {
//   "id":3,
//   "title":"Shoping Mall",
//   "pic":"https://travel.mqcdn.com/mapquest/travel/wp-content/uploads/2020/10/Istanbul-Cevahir-e1629224337449.jpg"
// },
// {
//   "id":4,
//   "title":"Park",
//   "pic":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/42/09/d5/m-n-krishna-rao-park.jpg?w=1200&h=1200&s=1"
// },
// {
//   "id":5,
//   "title":"Play Ground",
//   "pic":"https://images.theconversation.com/files/445989/original/file-20220211-15-l0twvr.jpg?ixlib=rb-1.1.0&rect=0%2C1005%2C6000%2C3000&q=45&auto=format&w=668&h=324&fit=crop"
// },
// {
//   "id":6,
//   "title":"Resorts",
//   "pic":"https://imgmedia.lbb.in/media/2020/12/5fe5fa2005df287ca10d9d75_1608907296571.jpg"
// },
// ]
