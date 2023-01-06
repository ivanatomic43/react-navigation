import { Fragment } from "react";

function Table({data, config, keyFn}){

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((object) =>{
            return(
                <td className="p-2" key={object.label}>{object.render(rowData)}</td>
            );
        });
        return(
            <tr className="border-b" key={keyFn(rowData)}>
              {renderedCells}
            </tr>
        );
    });

    const renderedHeaders = config.map((object) => {

        if(object.header) {
            return <Fragment key={object.label}>{object.header()}</Fragment>
        }

        return(<th key={object.label}>{object.label}</th>)
    });

    return(
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;