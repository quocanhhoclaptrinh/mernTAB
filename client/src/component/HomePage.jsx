import React from "react";
import { Button, DatePicker, InputNumber, Select } from "antd";
import "antd/dist/reset.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
const { RangePicker } = DatePicker;
const { Option } = Select;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomePage = () => {
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <Navigation />
      <div className="container items-center justify-center mx-auto">
        {/* search */}
        <div className="w-3/4 p-6 mx-auto my-4 bg-white rounded-lg shadow-md">
          <div className="flex space-x-4">
            <Select className="w-1/4" placeholder="City">
              <Option value="Ho Chi Minh City">Ho Chi Minh City</Option>
              {/* Add more options as needed */}
            </Select>
            <RangePicker className="w-1/4" />
            <InputNumber className="w-1/4" min={1} max={10} defaultValue={2} />
            <Button type="primary" className="w-1/4">
              Search
            </Button>
          </div>
        </div>
        {/* promotion */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold">Accommodation Promotions</h2>
          <Carousel responsive={responsive} arrows>
            <div style={contentStyle}>Slide 1</div>
            <div style={contentStyle}>Slide 2</div>
            <div style={contentStyle}>Slide 3</div>
            <div style={contentStyle}>Slide 4</div>
          </Carousel>
        </div>
        {/* Recommended places */}
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-semibold">
            Recommended places to stay for your next trip!
          </h2>
          <Carousel responsive={responsive} arrows>
            <div style={contentStyle}>Hotel 1</div>
            <div style={contentStyle}>Hotel 2</div>
            <div style={contentStyle}>Hotel 3</div>
            <div style={contentStyle}>Hotel 4</div>
          </Carousel>
        </div>
        {/* About us */}
        <div className="mt-6 mb-3 text-center">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <div className="flex space-x-4 ">
            <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-full rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">Name</h3>
              <p className="text-gray-600">UI Designer</p>
            </div>
            <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-full rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">Name</h3>
              <p className="text-gray-600">UI Designer</p>
            </div>
            <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-full rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">Name</h3>
              <p className="text-gray-600">UI Designer</p>
            </div>
            <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-full rounded-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">Name</h3>
              <p className="text-gray-600">UI Designer</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;