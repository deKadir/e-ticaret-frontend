import style from "./inputs.module.scss";
import { SearchIcon } from "../../assets/icons/Icons";
export function SearchInput({ placeholder = "", Children }) {
  return (
    <div className={style.inputContainer}>
      <SearchIcon width={13} height={13} />
      <input placeholder={placeholder} />
    </div>
  );
}
