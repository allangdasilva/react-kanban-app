import Header from "./components/Header/Header";
import Kanban from "./components/Kanban/Kanban";
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
