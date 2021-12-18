import './css/style.css';
import Header from './components/Header';
import Panels from './components/Panels';
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
            return <Panels key={index} index={index} data={data} deg={deg} />
          })
      }
      </section>

      <Footer />
    </figure>
  );
}

export default App;
