import Button from "@/components/startButton";
import Title from "../components/title"
import Rules from "../components/rules"

export default function Home() {
  return (
    <div className="grid grid-row-[0px_1fr_0px] items-center justify-items-center min-h-screen p-0 gap-1 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-[var(--foreground)]">Welcome To</h1>
      <Title />
      <Rules />
      <Button />
    </div>
  );
}
