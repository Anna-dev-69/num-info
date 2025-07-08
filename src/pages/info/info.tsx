import { useEffect } from "react";
import useStore from "../../store";
import "./info.scss";
import parseDateNumber from "../../utils/parse-date-number";
import NumberService from "../../services/number.service";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const radioNumber = (radioButton: number | undefined) => {
  if (radioButton === 1) return "Math";
  if (radioButton === 2) return "Trivia";
  if (radioButton === 3) return "Year";
  return "Date";
};

const Info = () => {
  const numInfo = useStore((s) => s.numInfo);
  const info = useStore((s) => s.info);
  const navigate = useNavigate();

  useEffect(() => {
    const { month, day } = numInfo?.number
      ? parseDateNumber(numInfo.number)
      : { month: undefined, day: undefined };

    if (!numInfo?.radioGroup || numInfo.number === null) return;
    NumberService.getNumberInfo(
      numInfo.number,
      numInfo.radioGroup,
      month,
      day
    ).then((res) => useStore.setState({ info: res }));
  }, [numInfo?.number, numInfo?.radioGroup]);

  return (
    <div className="Info">
      <div className="Info__radioNumber">
        {radioNumber(numInfo?.radioGroup)}
      </div>

      <div className="Info__number">Число: {numInfo?.number}</div>

      <div className="Info__info">{info ? info : "Данные загружаются..."}</div>

      <Button onClick={() => navigate("/")} style={{ marginTop: "5rem" }}>
        Вернуться на главную страницу
      </Button>
    </div>
  );
};

export default Info;
