//The spinning wheel component was taken from the Github repo "https://github.com/CamWang/react-spin-wheel.git"
import { SpinWheel } from '../../components/spinWheel';

export default async function Home() {
  return (
    <div className="containerDiv">
      <h1>Ready?</h1>
      <SpinWheel 
          items={
            ["Truth","Dare","Mystery Shot","Rule Change","Wild Card","Shot"]
          }
        />
    </div>
  );
}
