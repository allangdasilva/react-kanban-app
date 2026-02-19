import clsx from "clsx";
import StatusBar from "../../ui/kanban/StatusBar";
import TasksCard from "../../ui/kanban/TasksCard";

const flexCol = "flex flex-col gap-6";

const Kanban = () => {
  return (
    <section className="py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className={clsx(flexCol, "mb-16 lg:mb-0")}>
          <StatusBar title="Fazer" color="color-open" />
          <TasksCard status="open" />
        </div>
        <div className={clsx(flexCol, "mb-16 sm:mb-0")}>
          <StatusBar title="Fazendo" color="color-in-progress" />
          <TasksCard status="in-progress" />
        </div>
        <div className={clsx(flexCol)}>
          <StatusBar title="Feito" color="color-done" />
          <TasksCard status="done" />
        </div>
      </div>
    </section>
  );
};

export default Kanban;
