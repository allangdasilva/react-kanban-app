import Label from "../../form-fields/Label";
import Input from "../../form-fields/Input";
import clsx from "clsx";

const flexCol = "flex flex-col";

const ModalForm = () => {
  return (
    <form
      className={clsx(
        "w-full p-4 max-w-107 m-auto rounded-default bg-background-600",
        flexCol,
      )}
    >
      <h2 className="font-title-sm text-title mb-8">Nova Tarefa</h2>
      <div className={clsx(flexCol, "gap-4")}>
        <div className={clsx(flexCol, "gap-2")}>
          <Label htmlFor="task-title">Título*</Label>
          <Input id="task-title" placeholder="Digite o título da tarefa " />
        </div>
        <div className={clsx(flexCol, "gap-2")}>
          <Label htmlFor="task-desc">Descrição</Label>
          <Input
            id="task-desc"
            placeholder="Digite uma descrição para a tarefa"
          />
        </div>
      </div>
      <span className="font-body-sm text-body mt-6 mb-8">
        * Indica campo obrigatório
      </span>
    </form>
  );
};

export default ModalForm;
