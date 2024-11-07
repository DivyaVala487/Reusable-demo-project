import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridRowSelectionModel,
  GridSortDirection,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";

interface ReusableDataGridProps {
  rows?: GridRowsProp;
  columns: GridColDef[];
  initialPageSize?: number;
  pageSizeOptions?: number[];
  checkboxSelection?: boolean;
  disableRowSelectionOnClick?: boolean;
  sortingOrder?: GridSortDirection[];
  loading?: boolean;
  autoHeight?: boolean;
  pagination?: true;
  sx?: any;
  onRowSelectionModelChange?: (selectionModel: GridRowSelectionModel) => void;
  headerBgColor?: string;
  headerTextColor?: string;
}

const ReusableDataGrid: React.FC<ReusableDataGridProps> = ({
  rows,
  columns,
  initialPageSize = 5,
  pageSizeOptions = [5, 10, 20],
  checkboxSelection = false,
  disableRowSelectionOnClick = false,
  sortingOrder = ["asc", "desc"],
  loading = false,
  autoHeight = true,
  pagination = true,
  sx,
  onRowSelectionModelChange,
  headerBgColor = "#735DA5",
  headerTextColor = "black",
  ...restProps
}) => {
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: initialPageSize,
    page: 0,
  });

  const handlePaginationModelChange = (newModel: any) => {
    setPaginationModel(newModel);
  };

  return (
    <Box
      sx={{
        width: "100%", // Full width for responsiveness
        ...sx,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        // getRowHeight={() => 100}
        initialState={{
          pagination: {
            paginationModel: { pageSize: initialPageSize },
          },
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationModelChange}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick={disableRowSelectionOnClick}
        sortingOrder={sortingOrder}
        loading={loading}
        autoHeight={autoHeight}
        pagination={pagination}
        onRowSelectionModelChange={onRowSelectionModelChange}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: headerBgColor,
            color: headerTextColor,
            fontSize: "1rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            position: "relative",
            minHeight: "50px",
          },
          "& .MuiDataGrid-columnHeaders .MuiDataGrid-columnHeader": {
            transition: "all 0.3s ease-in-out",
            backgroundColor: headerBgColor,
          },
          "& .MuiDataGrid-columnHeaders .MuiDataGrid-columnHeader:hover": {
            zIndex: 10,
            fontSize: "1.2rem",
            minWidth: "150px",
          },
          "& .MuiDataGrid-cell": {
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            position: "relative",
            transition: "all 0.3s ease-in-out",
          },
          "& .MuiDataGrid-cell:hover": {
            zIndex: 10,
            fontSize: "1.2rem",
            minWidth: "150px",
          },
          "@media (max-width: 600px)": {
            "& .MuiDataGrid-columnHeaders .MuiDataGrid-columnHeader, & .MuiDataGrid-cell":
              {
                fontSize: "0.75rem",
                minWidth: "80px",
                textOverflow: "ellipsis",
              },
          },
        }}
        {...restProps}
      />
    </Box>
  );
};

export default ReusableDataGrid;
