import Button from "@/components/startButton";
import Title from "../components/title"
import Rules from "../components/rules"

export default function Home() {
  return (
    <div className="containerDiv">
      <h1>Welcome To</h1>
      <Title />
      <Rules />
      <Button />
    </div>
  );
}
