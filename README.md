# React select city province
Code online: https://codesandbox.io/s/select-city-province-loohko

![image](https://github.com/kentrung/react-select-city-province/assets/15643762/d82e2d3d-8983-4f9d-9ebf-8ca50e5c67d4)

## 1. First load
  - Dropdown của thành phố là `Chọn thành phố`
  - Dropdown của quận là `Chọn quận`
  - Button `Submit` ở trạng thái disabled

## 2. Khi chọn thành phố
  - Khi chọn 1 thành phố bất kì thì giá trị đã chọn của quận sẽ mất
  - Danh sách quận sẽ phụ thuộc vào việc chọn thành phố
  - Button `Submit` ở trạng thái disabled

## 3. Khi chọn quận
  - Danh sách quận sẽ phụ thuộc vào việc chọn thành phố ở trên
  - Khi chọn quận thì button `Submit` sẽ được enabled

## 4. Khi click submit
  - Alert thông tin thành phố - quận
