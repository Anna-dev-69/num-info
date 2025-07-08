import "./numbers.component.scss";
import FormComponent from "../form/form.component";
import dataInfo, { IDataInfo } from "../../data/data-info";
import useStore from "../../store";
import { useNavigate } from "react-router-dom";
import NumberService from "../../services/number.service";

const Numbers = () => {
  const navigate = useNavigate();

  const handleClickRandom = async (item: IDataInfo) => {
    try {
      NumberService.getRandomNumber(item.name).then((res) =>
        useStore.setState({ randomInfo: res })
      );

      useStore.setState({ currentId: item.id });

      navigate("/info-random");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="Numbers">
      <h3>Выберите информацию о дате</h3>
      <FormComponent />

      <div className="FormComponent__random">
        <h4>Выбрать информацию о рандомном числе</h4>
        <ul>
          {dataInfo.map((item) => (
            <li key={item.id} onClick={() => handleClickRandom(item)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Numbers;
