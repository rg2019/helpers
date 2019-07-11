 /* descargar grilla */
$.jgrid.gridUnload('#mi_grilla');


/* agregar item/row a grilla local */
var myRow = {
  ..
  ..
  ..
};
var lastId = 1;
if ($("#mi_grilla").getDataIDs().length > 0) {
    lastId = parseInt($("#mi_grilla").getDataIDs().length) + 1;
}
jQuery("#mi_grilla").addRowData(lastId, myRow, 'last');



/* eliminar item/row grilla local */
//id de la fila
rowid = $(row_id).closest("tr.jqgrow").attr("id");
$('#mi_grilla').jqGrid('delRowData',rowid);
