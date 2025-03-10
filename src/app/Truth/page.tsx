import Card from "@/components/card";
import Button from "@/components/button"
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/data/truth.json', 'utf8');
  const data = JSON.parse(file);
  const index: number = Math.floor(Math.random()*9);
  return (
    <div>
      <div className="grid grid-row-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card category='Truth' question={data.questions[index]} />
      <Button />
      </div>
    </div>
  )
}
