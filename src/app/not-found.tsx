'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    const body = document.body;

    const createStar = () => {
      const right = Math.random() * 500;
      const top = Math.random() * window.innerHeight;
      const star = document.createElement('div');
      star.className = 'star';
      body.appendChild(star);

      let currentRight = right;

      const interval = setInterval(() => {
        if (currentRight >= window.innerWidth) {
          star.remove();
          clearInterval(interval);
        } else {
          currentRight += 3;
          star.style.right = `${currentRight}px`;
        }
      }, 10);

      star.style.top = `${top}px`;
    };

    const intervalId = setInterval(createStar, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="not-found-page">
      <div className="text">
        <div>ERROR</div>
        <h1>404</h1>
        <hr />
        <div>Page Not Found</div>
      </div>

      <div className="astronaut">
        <img
          src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
          alt="Astronaut"
        />
      </div>

      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Tomorrow', sans-serif;
        }
        .not-found-page {
          height: 100vh;
          background-image: linear-gradient(
            to top,
            #2e1753,
            #1f1746,
            #131537,
            #0d1028,
            #050819
          );
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .text {
          position: absolute;
          top: 10%;
          color: #fff;
          text-align: center;
        }
        h1 {
          font-size: 50px;
        }
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #fff;
          right: 0;
          animation: starTwinkle 3s infinite linear;
        }
        .astronaut img {
          width: 100px;
          position: absolute;
          top: 55%;
          animation: astronautFly 6s infinite linear;
        }
        @keyframes astronautFly {
          0% {
            left: -100px;
          }
          25% {
            top: 50%;
            transform: rotate(30deg);
          }
          50% {
            top: 55%;
            transform: rotate(45deg);
          }
          75% {
            top: 60%;
            transform: rotate(30deg);
          }
          100% {
            left: 110%;
            transform: rotate(45deg);
          }
        }
        @keyframes starTwinkle {
          0% {
            background: rgba(255, 255, 255, 0.4);
          }
          25% {
            background: rgba(255, 255, 255, 0.8);
          }
          50% {
            background: rgba(255, 255, 255, 1);
          }
          75% {
            background: rgba(255, 255, 255, 0.8);
          }
          100% {
            background: rgba(255, 255, 255, 0.4);
          }
        }
      `}</style>
    </div>
  );
}
