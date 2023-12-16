import { useState } from "react";
import { mockData } from "./mockData";

export default function App() {
  const [dataInfo, setDataInfo] = useState({
    selectedCity: "",
    isSelectedCity: false,
    selectedProvince: "",
    isSelectedProvince: false,
    provinceList: [],
  });

  const handleChangeCity = (event) => {
    const city = event.target.value;
    if (city === "") {
      setDataInfo({
        selectedCity: "",
        isSelectedCity: false,
        selectedProvince: "",
        isSelectedProvince: false,
        provinceList: [],
      });
      return;
    }
    const filterCity = mockData.find((item) => item.id === city);
    const filterProvince = filterCity.province;
    setDataInfo({
      selectedCity: city,
      isSelectedCity: true,
      selectedProvince: "",
      isSelectedProvince: false,
      provinceList: filterProvince,
    });
  };

  const handleChangeProvince = (event) => {
    const province = event.target.value;
    if (province === "") {
      setDataInfo({
        ...dataInfo,
        selectedProvince: "",
        isSelectedProvince: false,
      });
    } else {
      setDataInfo({
        ...dataInfo,
        selectedProvince: province,
        isSelectedProvince: true,
      });
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
        {dataInfo.provinceList.map((province) => (
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
