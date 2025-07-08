import useStore from "../../store";
import dataInfo from "../../data/data-info";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const InfoRandom = () => {
  const randomInfo = useStore((s) => s.randomInfo);
  const currentId = useStore((s) => s.currentId);
  const navigate = useNavigate();

  return (
    <div className="Info">
      <div className="Info__radioNumber">
        {dataInfo[currentId].name.slice(0, 1).toUpperCase() +
          dataInfo[currentId].name.slice(1)}
      </div>
      <div className="Info__number">
        Число: {randomInfo.match(/^\d+/)?.[0] || "—"}
      </div>
      <div className="Info__info">
        {randomInfo ? randomInfo : "Данные загружаются..."}
      </div>
      <Button onClick={() => navigate("/")} style={{ marginTop: "5rem" }}>
        Вернуться на главную страницу{" "}
      </Button>
    </div>
  );
};

export default InfoRandom;
