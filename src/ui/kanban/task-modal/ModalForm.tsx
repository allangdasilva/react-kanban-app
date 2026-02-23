import React from "react";
import z from "zod";
import Label from "../../form-fields/Label";
import Input from "../../form-fields/Input";
import clsx from "clsx";
import Button from "../../form-fields/Button";
import InputError from "../../form-fields/InputError";
import useFocusTrap from "../../../hooks/useFocusTrap";
import { useBoundStore } from "../../../store/bound.stores";
import { useShallow } from "zustand/shallow";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const TaskSchema = z.object({
  task_title: z.string().nonempty("Título é obrigatório"),
  task_desc: z.string(),
});

type TaskData = z.infer<typeof TaskSchema>;

const flexCol = "flex flex-col";

const ModalForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskData>({
    resolver: zodResolver(TaskSchema),
  });

  const formRef = React.useRef<HTMLFormElement>(null);

  const { closeModal, isModalOpen } = useBoundStore(
    useShallow((state) => ({
      isModalOpen: state.isModalOpen,
      closeModal: state.closeModal,
    })),
  );

  function createTask(data: TaskData) {
    closeModal();
  }

  useFocusTrap(formRef, isModalOpen, closeModal);

  return (
    <form
      onSubmit={handleSubmit(createTask)}
      ref={formRef}
      id="create-task-modal"
      className={clsx("w-full p-4 rounded-default bg-background-600", flexCol)}
    >
      <h2 className="font-title-sm text-title mb-8">Nova Tarefa</h2>
      <div className={clsx(flexCol, "gap-4")}>
        <div className={clsx(flexCol, "gap-2")}>
          <Label htmlFor="task-title">Título *</Label>
          <Input
            type="text"
            id="task-title"
            placeholder="Digite o título da tarefa"
            {...register("task_title")}
          />
          {errors.task_title && (
            <InputError>{errors.task_title.message}</InputError>
          )}
        </div>
        <div className={clsx(flexCol, "gap-2")}>
          <Label htmlFor="task-desc">Descrição</Label>
          <Input
            type="text"
            id="task-desc"
            placeholder="Digite uma descrição para a tarefa"
            {...register("task_desc")}
          />
          {errors.task_desc && (
            <InputError>{errors.task_desc.message}</InputError>
          )}
        </div>
      </div>
      <span className="font-body-sm text-body mt-6 mb-8">
        * Indica campo obrigatório
      </span>

      <div className="flex justify-end flex-wrap gap-2">
        <Button type="submit" className="text-primary bg-background-700">
          Criar
        </Button>
        <Button
          onClick={closeModal}
          type="button"
          className="text-body bg-background-500"
        >
          Cancelar
        </Button>
      </div>
    </form>
  );
};

export default ModalForm;
