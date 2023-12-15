import { useState } from "react";
import { mockData } from "./mockData";

export default function App() {
  const [provinces, setProvinces] = useState([]);
  const [dataInfo, setDataInfo] = useState({
    selectedCity: "",
    isSelectedCity: false,
    selectedProvince: "",
    isSelectedProvince: false,
  });

  const handleChangeCity = (event) => {
    const selectedCity = event.target.value;
    if (selectedCity === "") {
      setProvinces([]);
      setDataInfo({
        selectedCity: "",
        isSelectedCity: false,
        selectedProvince: "",
        isSelectedProvince: false,
      });
      return;
    }
    const filterCity = mockData.find((item) => item.id === selectedCity);
    const filterProvince = filterCity.province;
    setProvinces(filterProvince);
    setDataInfo({
      selectedCity,
      isSelectedCity: true,
      selectedProvince: "",
      isSelectedProvince: false,
    });
  };

  const handleChangeProvince = (event) => {
    const selectedProvince = event.target.value;
    if (selectedProvince === "") {
      setDataInfo({
        ...dataInfo,
        selectedProvince: "",
        isSelectedProvince: false,
      });
    } else {
      setDataInfo({ ...dataInfo, selectedProvince, isSelectedProvince: true });
    }
  };

  return (
    <div className="container my-5">
      <h2>Chọn thành phố</h2>
      <select className="form-select mb-3" onChange={handleChangeCity}>
        <option value="">Chọn thành phố</option>
        {mockData.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      <h2>Chọn quận</h2>
      <select className="form-select mb-3" onChange={handleChangeProvince}>
        <option value="">Chọn quận</option>
        {provinces.map((province) => (
          <option key={province.id} value={province.id}>
            {province.name}
          </option>
        ))}
      </select>
      <button
        className="btn btn-primary"
        disabled={!dataInfo.isSelectedCity || !dataInfo.isSelectedProvince}
        onClick={() =>
          alert(
            JSON.stringify({
              "Thành Phố": dataInfo.selectedCity,
              Quận: dataInfo.selectedProvince,
            })
          )
        }
      >
        Submit
      </button>
    </div>
  );
}
