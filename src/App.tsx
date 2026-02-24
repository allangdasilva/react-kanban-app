import Header from "./components/header/Header";
import Kanban from "./components/kanban/Kanban";
import Divider from "./ui/divider/Divider";
import TaskModal from "./ui/kanban/task-modal/TaskModal";

function App() {
  return (
    <>
      <Header />
      <Divider />
      <Kanban />
      <TaskModal />
    </>
  );
}

export default App;
