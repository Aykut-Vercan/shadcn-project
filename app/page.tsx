import AreaChartEx from "@/components/AreaChartEx";
import BarChartEx from "@/components/BarChartEx";
import CardList from "@/components/CardList";
import PieChartEx from "@/components/PieChartEx";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"> <BarChartEx /></div>
      <div className="bg-primary-foreground p-4 rounded-lg"><CardList title="Popular Content"/> </div>
      <div className="bg-primary-foreground p-4 rounded-lg"> <CardList title="Latest Transaction"/></div>
      <div className="bg-primary-foreground p-4 rounded-lg"> <PieChartEx /></div>
      <div className="bg-primary-foreground p-4 rounded-lg"> <TodoList/></div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2"> <AreaChartEx /></div>
    </div>
  );
}
