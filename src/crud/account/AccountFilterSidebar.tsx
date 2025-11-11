import { FilterList, FilterListItem } from "react-admin";
import { Card, CardContent } from "@mui/material";
import { AttachMoney } from "@mui/icons-material";
import { CreditCard } from "@mui/icons-material";

export const AccountFilterSidebar = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
      <CardContent>
        <FilterList label="Activo" icon={<AttachMoney />}>
          <FilterListItem label="Deudores" value={{ "code@like": "1-1-03" }} />
          <FilterListItem
            label="Bancos"
            value={{
              "@or": {
                "code@like": "1-1-02",
                "code@ilike": "1-1-04",
                // "code@ilike": "2.1.03",
              },
            }}
          />
        </FilterList>
        <FilterList label="Pasivo" icon={<CreditCard />}>
          <FilterListItem
            label="Préstamos"
            value={{
              "@or": {
                "code@like": "2-1-01",
                "code@ilike": "2-1-02",
              },
            }}
          />
        </FilterList>
      </CardContent>
    </Card>
  );
};
