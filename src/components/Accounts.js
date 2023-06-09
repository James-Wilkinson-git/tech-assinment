import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { accounts } from "../mockData.js";
import { useDispatch, useSelector } from "react-redux";
import { changeAccount } from "../redux/account.js";

export const Accounts = function Accounts() {
  //Grab our desired state value from the selected state slice name
  const { selectedAccount } = useSelector((state) => state.account);
  //Setup actions
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeAccount(event.target.value));
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: "98%" }}>
        <InputLabel id="account-label">Account</InputLabel>
        <Select
          labelId="account-label"
          id="account-selection"
          label="Age"
          value={selectedAccount}
          onChange={handleChange}
        >
          {accounts?.map((account) => {
            return (
              <MenuItem
                value={account.key}
                key={account.key}
              >{`${account.description} ${account.id} ${account.typeDesc}`}</MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};
