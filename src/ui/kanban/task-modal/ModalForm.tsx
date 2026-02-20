import Label from "../../form-fields/Label";
import Input from "../../form-fields/Input";
import clsx from "clsx";
import Button from "../../form-fields/Button";

const flexCol = "flex flex-col";

const buttonFocus =
  "hover:outline-2 hover:outline-primary hover:ring-4 hover:ring-background-700 focus:outline-2 focus:outline-primary focus:ring-4 focus:ring-background-700";

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
          <Input
            type="text"
            id="task-title"
            placeholder="Digite o título da tarefa "
          />
        </div>
        <div className={clsx(flexCol, "gap-2")}>
          <Label htmlFor="task-desc">Descrição</Label>
          <Input
            type="text"
            id="task-desc"
            placeholder="Digite uma descrição para a tarefa"
          />
        </div>
      </div>
      <span className="font-body-sm text-body mt-6 mb-8">
        * Indica campo obrigatório
      </span>

      <div className="flex justify-end gap-2">
        <Button
          type="submit"
          className={clsx("text-primary bg-background-700", buttonFocus)}
        >
          Criar
        </Button>
        <Button type="button" className="text-body bg-background-500">
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default ModalForm;
