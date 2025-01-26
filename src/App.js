import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import love from "./assets/love.mp3";
import cat from "./assets/cat.gif";
import hi from "./assets/hi.jpg";
import ha from "./assets/ha.jpg";
import video from "./assets/video.MP4";
import { Yes } from "./Yes";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Перевіряємо, чи аудіо-елемент готовий
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.error("Автовідтворення аудіо заблоковано браузером:", err);
      });
    }
  }, []);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <Router basename='/valentine'>
      <div className='App'>
        {/* Аудіо додається глобально */}
        <audio ref={audioRef} src={love} loop />

        <Routes>
          {/* Головна сторінка */}
          <Route
            path='/'
            element={
              <div className='container'>
                <img src={cat} />
                <h1 className='question'>Will you be my valentine? 😻💖</h1>
                <video
                  src={video}
                  controls
                  autoPlay
                  loop
                  style={{ width: "70%", maxWidth: "400px" }}
                ></video>
                <div className='answer'>
                  <div className='linkwrap'>
                    <Link
                      className='buttonWrap'
                      to='/yes'
                      onClick={handlePlayAudio}
                    >
                      <button>YYEEEEESSS!!!</button>
                    </Link>{" "}
                    <img src={hi} />
                  </div>
                  <div className='linkwrap'>
                    <img src={ha} />
                    <Link
                      className='buttonWrap'
                      to='/yes'
                      onClick={handlePlayAudio}
                    >
                      <button>OF COURSE YEEES!!</button>
                    </Link>
                  </div>
                </div>
              </div>
            }
          />

          {/* Сторінка "Yes" */}
          <Route path='/yes' element={<Yes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
