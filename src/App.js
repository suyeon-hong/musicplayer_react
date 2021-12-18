import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const arr = ["Blizzards", "Calm", "Dusty_Road", "Escape", "Payday", "Retreat", "Seasonal", "Vespers"]
  const deg = 360/arr.length;

  return (
    <figure>
      <Header />

      <section>
        {
          arr.map((data,index)=>{
            let bgImg = {backgroundImage: `url(${process.env.PUBLIC_URL}/img/${data}.jpg)`}
            let rotatePanel = {transform: `rotate(${deg*index}deg) translateY(-100vh)`}

            return(
              <article key={index} style={rotatePanel}>
                <div className="inner">
                  <div className="pic" style={bgImg}>
                    <div className="dot"></div>
                  </div>
                  <div className="txt">
                    <h2>{data}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, itaque?</p>
                  </div>
                </div>
              </article>
            )
          })
      }
      </section>

      <Footer />
    </figure>
  );
}

export default App;
