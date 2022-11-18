CREATE TABLE Siniestros_2018(ID INT, X VARCHAR, Y VARCHAR, FID INT, Hora VARCHAR, Fecha VARCHAR, Comuna VARCHAR, Cód_Tipo_ INT, Cód_Tipo1 INT, Cód_Zona INT, Cód_Ubica INT, Cód_Causa INT,Cód_Cau_1 INT, Cód_Calza INT, Cód__Tipo INT, Cód_Estad INT, Cód_Condi INT , Cód_Est_1 INT, Fallecidos INT, Graves INT, Menos_Grav INT, Leves INT, Encoded_comuna INT);
COPY Siniestros_2018(id,x,y,fid,hora,fecha,comuna,cód_tipo_,cód_tipo1,cód_zona,cód_ubica,cód_causa,cód_cau_1,cód_calza,cód__tipo,cód_estad,cód_condi,cód_est_1,fallecidos,graves,menos_grav,leves,encoded_comuna) FROM '/var/lib/postgresql/data/csv_normalize_2018.csv' DELIMITER ',' CSV HEADER;