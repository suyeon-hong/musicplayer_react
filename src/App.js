import './css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  let bgImg = {backgroundImage: `url(${process.env.PUBLIC_URL}/img/member1.jpg)`}
  return (
    <figure>
      <Header />

      <section>
        <article>
          <div className="inner">
            <div className="pic" style={bgImg}>
              <div className="dot"></div>
            </div>
            <div className="txt">
              <h2>Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, itaque?</p>
            </div>
          </div>
        </article>
      </section>

      <Footer />
    </figure>
  );
}

export default App;
