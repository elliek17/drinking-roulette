import Card from "@/components/card";
import Button from "@/components/button"

export default async function Home() {
  return (
    <div>
      <div className="grid grid-row-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Card category='Shot' question='Take a shot and Skip your turn' />
      <Button />
      </div>
    </div>
  )
}
