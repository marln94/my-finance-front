import { FilterList, FilterListItem } from "react-admin";
import { Card, CardContent } from "@mui/material";
import {
  ArrowDownward,
  ArrowUpward,
  AttachMoney,
  CreditCard,
} from "@mui/icons-material";

export const AccountFilterSidebar = () => {
  return (
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
      <CardContent>
        <FilterList label="Activo" icon={<AttachMoney />}>
          <FilterListItem label="Caja" value={{ "code@like": "1-1-01" }} />
          <FilterListItem
            label="Bancos HNL"
            value={{ "code@like": "1-1-02" }}
          />
          <FilterListItem
            label="Deudores varios"
            value={{ "code@like": "1-1-03" }}
          />
          <FilterListItem
            label="Bancos USD"
            value={{ "code@like": "1-1-04" }}
          />
          <FilterListItem
            label="Préstamos por cobrar"
            value={{ "code@like": "1-1-05" }}
          />
          <FilterListItem
            label="Deudores préstamos"
            value={{ "code@like": "1-1-06" }}
          />
        </FilterList>
        <FilterList label="Pasivo" icon={<CreditCard />}>
          <FilterListItem
            label="Préstamos generales"
            value={{ "code@like": "2-1-01" }}
          />
          <FilterListItem
            label="Extra-financiamientos"
            value={{ "code@like": "2-1-02" }}
          />
          <FilterListItem
            label="Cuotas sin interés"
            value={{ "code@like": "2-1-03" }}
          />
          <FilterListItem label="TC BAC" value={{ "code@like": "2-1-04" }} />
          <FilterListItem label="TC ATL" value={{ "code@like": "2-1-05" }} />
          <FilterListItem label="TC BAP" value={{ "code@like": "2-1-06" }} />
          <FilterListItem label="TC BAP" value={{ "code@like": "2-1-07" }} />
        </FilterList>

        <FilterList label="Ingresos" icon={<ArrowUpward />}>
          <FilterListItem label="Salarios" value={{ "code@like": "4-1-01" }} />
          <FilterListItem
            label="Transferencias"
            value={{ "code@like": "4-1-02" }}
          />
          <FilterListItem
            label="Redención TC"
            value={{ "code@like": "4-1-03" }}
          />
          <FilterListItem
            label="Intereses bancos"
            value={{ "code@like": "4-1-04" }}
          />
          <FilterListItem label="Efectivo" value={{ "code@like": "4-1-05" }} />
          <FilterListItem
            label="Financieros varios"
            value={{ "code@like": "4-1-06" }}
          />
        </FilterList>

        <FilterList label="Egresos" icon={<ArrowDownward />}>
          <FilterListItem
            label="Transferencias"
            value={{ "code@like": "5-1-01" }}
          />
          <FilterListItem label="Comida" value={{ "code@like": "5-1-05" }} />
          <FilterListItem
            label="Costos fijos"
            value={{ "code@like": "5-1-06" }}
          />
          <FilterListItem
            label="Servicios electrónicos"
            value={{ "code@like": "5-1-07" }}
          />
          <FilterListItem
            label="Entretenimiento"
            value={{ "code@like": "5-1-08" }}
          />
          <FilterListItem
            label="Transporte"
            value={{ "code@like": "5-1-09" }}
          />
          <FilterListItem label="Vivienda" value={{ "code@like": "5-1-10" }} />
          <FilterListItem label="Salud" value={{ "code@like": "5-1-11" }} />
          <FilterListItem label="Seguros" value={{ "code@like": "5-1-12" }} />
          <FilterListItem label="Tiendas" value={{ "code@like": "5-1-13" }} />
          <FilterListItem label="Varios" value={{ "code@like": "5-1-14" }} />
          <FilterListItem
            label="Fin. - Préstamos"
            value={{ "code@like": "5-1-15" }}
          />
          <FilterListItem
            label="Fin. - Extras"
            value={{ "code@like": "5-1-16" }}
          />
          <FilterListItem
            label="Fin. - Cuotas sin interés"
            value={{ "code@like": "5-1-17" }}
          />
          <FilterListItem
            label="Fin. - Varios"
            value={{ "code@like": "5-1-18" }}
          />
          <FilterListItem label="Fin. - TC" value={{ "code@like": "5-1-19" }} />
        </FilterList>
      </CardContent>
    </Card>
  );
};
