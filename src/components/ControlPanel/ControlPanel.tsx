import { Input, Select } from "antd";
import { RootState, useAppSelector, useAppDispatch } from "../../store";
import { setFilter, setSortStatus } from "../../store/actions/library.actions";
import "./ControlPanel.scss";

const { Option } = Select;

export const ControlPanel = () => {
  const { filter, sort } = useAppSelector((state: RootState) => state.library);
  const dispatch = useAppDispatch();

  return (
    <div className="ControlPanel">
      <div className="ControlPanel__select">
        <p className="ControlPanel__label ControlPanel__select-label">
          Сортировка количества библиотек
        </p>
        <Select
          defaultValue={sort}
          onChange={(val) => dispatch(setSortStatus(val))}
          className="ControlPanel__select-component"
        >
          <Option value="default">По умолчанию</Option>
          <Option value="up">По возрастанию</Option>
          <Option value="down">По убыванию</Option>
        </Select>
      </div>
      <div className="ControlPanel__select">
        <p className="ControlPanel__label ControlPanel__select-label">
          Название региона
        </p>
        <Input
          placeholder="Название"
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        />
      </div>
    </div>
  );
};
