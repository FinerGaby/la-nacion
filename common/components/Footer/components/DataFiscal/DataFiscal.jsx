import React from "react";
import { CustomLink } from "../../../CustomLink";
import { Images } from "../../../Images";
import { Title } from "../../../Title";

export const DataFiscal = () => {
  return (
    <p>
      <Images
        url="https://static.glanacion.com/v2/ln/img/gda.jpg"
        alt="gda"
        className="img_gda"
      />{" "}
      <Title title="Miembro de GDA. Grupo de Diarios América" />
      <CustomLink
        href="https://serviciosweb.afip.gob.ar/clavefiscal/qr/publicInfoD.aspx"
        target="_blank"
      >
        <Images
          url="https://static.glanacion.com/v2/ln/img/data.jpg"
          alt="Data fiscal"
          className="img_data-fiscal"
        />
      </CustomLink>
    </p>
  );
};
