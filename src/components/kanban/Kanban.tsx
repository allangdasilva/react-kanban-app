import StatusBar from "../../ui/kanban/StatusBar";

const Kanban = () => {
  return (
    <section className="py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatusBar title="Fazer" color="color-open" />
        <StatusBar title="Fazendo" color="color-in-progress" />
        <StatusBar title="Feito" color="color-done" />
      </div>
    </section>
  );
};

export default Kanban;
