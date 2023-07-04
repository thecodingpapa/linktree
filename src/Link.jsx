import React from 'react';
import "@fontsource/roboto"; // Defaults to weight 400.
import './Link.css'

function Link() {

    const data = [
        {
          name: "YouTube",
          img: "https://i.ibb.co/2v1hJKp/youtube-1.png",
          link: "https://www.youtube.com/channel/UC7v5yfvZhs-d5opF575AEhA/",
        },
        {
          name: "Patreon",
          img: "https://i.ibb.co/pLbrYXY/patreon-1.png",
          link: "https://www.patreon.com/rainishere",
        },
        {
          name: "Facebook",
          img: "https://i.ibb.co/XzZWyzz/facebook-app-symbol.png",
          link: "https://www.facebook.com/profile.php?id=100063891051783",
        },
        {
          name: "RainIsHere 課程 (豬豬成為專業投資者必學的7大課)",
          img: "https://i.ibb.co/Zzsj5Kw/graduate.png",
          link: "https://www.investingwithrain.com/courses/7majors",
        },
        {
          name: "RainIsHere 課程(豬豬\"被動收息\"投資教學)",
          img: "https://i.ibb.co/Zzsj5Kw/graduate.png",
          link: "https://www.investingwithrain.com/courses/passiveincome",
        },
        {
          name: "RainIsHere 課程(🏆豬豬成為超級投資者必學的八大課🏆)",
          img: "https://i.ibb.co/Zzsj5Kw/graduate.png",
          link: "https://www.investingwithrain.com/bundles/super8",
        },
        {
          name: "Saxo 開戶送USD 125 Super 8 課程優惠（香港戶）",
          img: "https://i.ibb.co/42T55pz/gift.png",
          link: "https://ad.doubleclick.net/ddm/clk/505677034;312961192;g",
        },
        {
          name: "Saxo 開戶送USD 125 Super 8 課程優惠（國際離岸戶）",
          img: "https://i.ibb.co/42T55pz/gift.png",
          link: "https://ad.doubleclick.net/ddm/clk/505346021;312961192;v",
        },
        {
          name: "Firstrade (美股及ETFs/美股$0手續費+離岸)",
          img: "https://i.ibb.co/ZgwvpPg/bullish.png",
          link: "https://affiliate.firstrade.com/affiliate/idevaffiliate.php?id=1074",
        },
        {
          name: "Rain的書單",
          img: "https://i.ibb.co/Zzsj5Kw/graduate.png",
          link: "https://www.investingwithrain.com/pages/rain",
        },
      ];
      
    return (
        <div>
      {data.map((item, index) => (
        <button
          className="link"
          key={index}
          onClick={() => window.open(item.link, "_blank")}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{ width: '1.6em', marginRight: '0.4em' }}
            />
            <span>{item.name}</span>
          </div>
        </button>
      ))}
    </div>
        
    )
    }


export default Link