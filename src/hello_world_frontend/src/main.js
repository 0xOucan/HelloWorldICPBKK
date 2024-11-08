import App from './App';
import './index.scss';
import { hello_world_backend } from "../../declarations/hello_world_backend";

const app = new App();

// Agregar event listener para mostrar nombres
document.getElementById("showNames").addEventListener("click", async () => {
    const names = await hello_world_backend.submittedNames();
    document.getElementById("nameList").innerText = names.join(", ");
});
