import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="bg-black h-screen  ">

      <div className="flex flex-wrap gap-4">
        <Button variant="darkspace" value="darkspace" />
        <Button variant="whitespace" value="whitespace" />
        <Button variant="success" value="success" />
        <Button variant="danger" value="danger" />
        <Button variant="neon-darkspace" value="neonDarkspace" />
        <Button variant="neon-whitespace" value="neonWhitespace" />
        <Button variant="neon-success" value="neonSuccess" />
        <Button variant="neon-danger" value="neonDanger" />
        <Button variant="bluemoon" value="neonDanger" />
        <Button variant="neon-night" value="neonDanger" />
      </div>
    </div>
  );
}

export default App;