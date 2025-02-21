import Card from "@/components/card";
import Button from "@/components/button"
import { promises as fs } from 'fs';
export const dynamic = 'force-dynamic';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/data/questions.json', 'utf8');
  const data = JSON.parse(file);
  const index: number = Math.floor(Math.random()*9);
  return (
    <div>
      <div className="grid grid-row-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card category='Rule Change' question={data.RuleChange[index]} />
      <Button />
      </div>
    </div>
  )
}
