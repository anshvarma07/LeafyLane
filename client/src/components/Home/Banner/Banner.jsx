import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner.png";

export default function Banner() {
  return (
    <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <a href="#yahaScrollHo" className="hello"><div className="banner-cta v2">Shop Now</div></a>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
  );
}
