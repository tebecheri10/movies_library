import React,  { FC } from "react";
import avatarPlaceholder from '../../assets/avatar-placeholder.webp'

interface CastTableProps {
    castInfo: any
}

const CastTable: FC<CastTableProps> = ({ castInfo }) => {

  return (
    <>
      <h2 className="castTable_title">Cast info</h2>
      {castInfo?.length > 0 ?
        <table className="castTable_table">
          <thead className="castTable_thead">
            <tr className="castTable_thead-tr" >
              <th className="castTable_thead-th">Cast</th>
              <th className="castTable_thead-th">Actor name</th>
              <th className="castTable_thead-th">Fiction name</th>
            </tr>
          </thead>
          <tbody className="castTable_body">
            {castInfo?.map((data: any) => (
              <tr className="castTable_body-tr" key={data?.character?.id}>
                <td className="castTable_body-td">
                  <div className="castTable_body-imgWrapper">
                    <img className="castTable_body-img castTable_body-img--circular" src={data?.person?.image?.original || avatarPlaceholder} alt={data?.person?.name}  />
                  </div>
                </td>
                <td className="castTable_body-td">{data?.person?.name}</td>
                <td className="castTable_body-td">{data?.character?.name}</td>
              </tr>
            ))}
          </tbody>
        </table> :
        <p className="castTable_noInfoMessage">No cast info Available</p>
      }
    </>
  );
}

export default CastTable;
