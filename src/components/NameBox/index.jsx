import { StyledSubTitle, StyledTitle } from "./style";
import { i18n } from "../../translate/i18n";

const NameBox = () => {
  return (
    <div>
      <StyledTitle>{i18n.t("titles.name")}</StyledTitle>
      <StyledSubTitle>{i18n.t("titles.sub")}</StyledSubTitle>
    </div>
  );
};

export default NameBox;
