import "./App.scss";
// get our fontawesome imports
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "animate.css";

function App() {
  // Some data if the server unable to send any
  const q = [
    {
      quote:
        "Life isn’t about getting and having, it’s about giving and being.",
      author: "Kevin Kruse",
    },
    {
      quote:
        "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill",
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      author: "Albert Einstein",
    },
    {
      quote:
        "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      author: "Robert Frost",
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale",
    },
    {
      quote:
        "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
      author: "John Lennon",
    },
    {
      quote: "Fall seven times and stand up eight.",
      author: "Japanese Proverb",
    },
    {
      quote:
        "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.",
      author: "Helen Keller",
    },
    {
      quote: "Everything has beauty, but not everyone can see.",
      author: "Confucius",
    },
    {
      quote:
        "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
      author: "Anne Frank",
    },
  ];

  // Color Codes
  const color = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  // States to handle the data
  const [quoteData, setQuoteData] = useState(0);
  const [animate, setAnimate] = useState(null);
  const [index, setIndex] = useState(Math.floor(Math.random() * q.length));
  const [colorIndex, setColorIndex] = useState(
    Math.floor(Math.random() * color.length)
  );

  // Inside the useEffect we can call the API to send the data back
  useEffect(() => {
    // Using J-Query we can call the API
    $.ajax({
      headers: {
        Accept: "application/json",
      },
      url: "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
      success: (res) => {
        const data = JSON.parse(res);
        console.log("data :>> ", data);
        setQuoteData(data);
      },
      error: (err) => {
        const data = [];
        setQuoteData(data);
        console.log(
          "Sorry unable to connect with the server! please try again later :>> ",
          err
        );
      },
    });
  }, []);

  //
  return (
    <div
      id={"wrapper"}
      style={{
        backgroundColor: color[colorIndex],
      }}
    >
      {/* My Logo */}
      <div className="logo-container">
        <img
          className="logo-image"
          src="https://raw.githubusercontent.com/hirishu10/my-assets/main/contact_logo.png"
          alt="my_logo"
          width={"80px"}
          height={"80px"}
        />
      </div>
      {/* My Logo */}
      {/*  */}
      {/* Qoute-Box Start -- */}
      <div id="quote-box">
        {/*  */}
        <div id="text-container">
          {/* Quote Displaying here! */}
          <span
            id="text"
            style={{ color: animate === null ? color[colorIndex] : "white" }}
          >
            <em>
              {
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size={"lg"}
                  style={{
                    color: animate === null ? color[colorIndex] : "white",
                    marginRight: 5,
                    transition: "1s",
                  }}
                />
              }
            </em>
            {quoteData.length > 0 ? quoteData[index].quote : q[index].quote}
          </span>
        </div>
        {/* +++++++++++++++++++++++++++++++++++++++++++++ */}
        {/* +++++++++++++++++++++++++++++++++++++++++++++ */}
        <div id="buttons-container">
          {/* Author Displaying here! */}
          <div
            id="author"
            style={{ color: animate === null ? color[colorIndex] : "white" }}
          >
            ~ {quoteData.length > 0 ? quoteData[index].author : q[index].author}
          </div>
          {/* ********************* */}
          <div id="icon-button">
            <div id={"icon-container"}>
              {/* Tweet Button */}
              <a
                id={"tweet-quote"}
                className="icon-design"
                href={`https://twitter.com/intent/tweet?hashtags=quotes&related=rishuchowdhary&text=${encodeURIComponent(
                  q[index].quote
                )}%20~${encodeURIComponent(q[index].author)}%20@rishuchowdhary`}
                style={{
                  backgroundColor: color[colorIndex],
                  marginLeft: 20,
                  transition: "1s",
                }}
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size={"lg"} color={"white"} />
              </a>
              {/* Tumblr Button */}
              <a
                id={"tumblr-quote"}
                className="icon-design"
                style={{ backgroundColor: color[colorIndex], transition: "1s" }}
                href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,hirishu10&caption=${encodeURIComponent(
                  q[index].author
                )}&content=${encodeURIComponent(
                  q[index].quote
                )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
                target={"_blank"}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTumblr} size={"lg"} color={"white"} />
              </a>
            </div>
            {/* **************** */}
            <div id={"newQuote-container"}>
              {/* Displaying button for new quote */}
              <button
                id="new-quote"
                style={{ backgroundColor: color[colorIndex] }}
                onClick={(e) => {
                  e.preventDefault();
                  setAnimate("animate");

                  setTimeout(() => {
                    let x =
                      quoteData.length > 0
                        ? Math.floor(Math.random() * quoteData.length)
                        : Math.floor(Math.random() * q.length);
                    // let x = index > q.length - 1 ? 0 : index + 1;
                    let y1 = Math.floor(Math.random() * color.length);
                    // let y = colorIndex === color.length - 1 ? 0 : colorIndex + 1;
                    setAnimate(null);

                    // J-Query
                    setColorIndex(y1);
                    $("#text").addClass("animate__animated animate__fadeIn ");
                    $("#author").addClass("animate__animated animate__fadeIn ");
                    setIndex(x);
                    setTimeout(() => {
                      $("#text").removeClass(
                        "animate__animated animate__fadeIn"
                      );
                      $("#author").removeClass(
                        "animate__animated animate__fadeIn"
                      );
                    }, 500);
                  }, 500);
                }}
              >
                New quote
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Qoute-Box End -- */}
      {/* Footer  Start -- */}
      <div id="name-design">
        by{" "}
        <a id="" href="#rishu">
          rishu
        </a>
      </div>
      {/* Footer  End -- */}
    </div>
  );
}

export default App;
