//The spinning wheel component was taken from the Github repo "https://github.com/CamWang/react-spin-wheel.git"
import { SpinWheel } from '../../components/spinWheel';

export default async function Home() {
  return (
    <div className="grid grid-row-[20px_1fr_20px] items-center justify-items-center min-h-screen p-0 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-[var(--foreground)]">Ready?</h1>
      <SpinWheel 
          items={
            ["Truth","Dare","Mystery Shot","Rule Change","Wild Card","Shot"]
          }
        />
    </div>
  );
}
