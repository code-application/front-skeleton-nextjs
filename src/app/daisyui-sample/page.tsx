import DaisyUIButton from "../../components/DaisyUISample/Button";
import DaisyUICard from "../../components/DaisyUISample/Card";

const DaisyUISamplePage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">DaisyUI Sample Page</h1>
      <div className="mb-4">
        <DaisyUIButton />
      </div>
      <div>
        <DaisyUICard />
      </div>
    </div>
  );
};

export default DaisyUISamplePage;
