import React from "react";

const CustomUrbanKickPage = () => {
  return (
    <section className="urbankick-hero">
      <div className="urbankick-content">
        <h1>Welcome to UrbanKick</h1>

        <p>
          Step into style with premium sneakers, sports shoes, and streetwear
          essentials.
        </p>

        <button>Shop Now</button>
      </div>

      <style>{`
        .urbankick-hero {
          min-height: 620px;
          background:
            linear-gradient(rgba(220,0,25,0.08), rgba(120,0,20,0.25)),
            url('https://images.unsplash.com/photo-1542291026-7eec264c27ff');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .urbankick-content {
          width: 65%;
          max-width: 920px;
          background: rgba(0,0,0,0.62);
          color: #ffffff;
          text-align: center;
          padding: 55px 45px;
          border-radius: 18px;
        }

        .urbankick-content h1 {
          color: #ffffff;
          font-size: 56px;
          font-weight: 900;
          margin-bottom: 22px;
          line-height: 1.1;
        }

        .urbankick-content p {
          color: #ffffff;
          font-size: 25px;
          line-height: 1.45;
          margin-bottom: 35px;
        }

        .urbankick-content button {
          background: #ff6a00;
          color: #ffffff;
          border: none;
          padding: 18px 48px;
          border-radius: 10px;
          font-size: 22px;
          font-weight: 600;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .urbankick-content {
            width: 80%;
            padding: 45px 35px;
          }

          .urbankick-content h1 {
            font-size: 44px;
          }

          .urbankick-content p {
            font-size: 21px;
          }
        }

        @media (max-width: 768px) {
          .urbankick-hero {
            min-height: 520px;
            padding: 30px 16px;
          }

          .urbankick-content {
            width: 95%;
            padding: 35px 22px;
            border-radius: 14px;
          }

          .urbankick-content h1 {
            font-size: 34px;
          }

          .urbankick-content p {
            font-size: 18px;
          }

          .urbankick-content button {
            font-size: 18px;
            padding: 14px 32px;
          }
        }

        @media (max-width: 480px) {
          .urbankick-hero {
            min-height: 460px;
          }

          .urbankick-content h1 {
            font-size: 28px;
          }

          .urbankick-content p {
            font-size: 16px;
          }

          .urbankick-content button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default CustomUrbanKickPage;

export const settings = {
  label: "Custom UrbanKick Page",
  props: [],
};