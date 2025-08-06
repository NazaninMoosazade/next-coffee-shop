import React from "react";
import ServiceItem from "@/Components/modules/ServiceItem/ServiceItem";

export default function Services({ services }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh &amp; Organic Beans</h1>
        </div>
        <div className="row">
          {services.map((service) => (
            <ServiceItem
              title={service.title}
              desc={service.desc}
              img={service.img}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
