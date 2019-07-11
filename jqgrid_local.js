/* ejemplo de jqgrid local */

function grillaEditarFactura(){
    mydata = []
    $("#grid_editarfactura").jqGrid({
        data:mydata,
        editurl: 'clientArray',
        datatype: "local",
        colModel: [
            { label: 'id', name: 'id', width: 10, align:'center', hidden:true},
            { label: 'id', name: 'impuestoId', width: 10, align:'center', hidden:true},
            { label: 'Categoria', name: 'tipo', width: 50, align:'left', cellattr: function (rowId, tv, rawObject, cm, rdata) { return 'style="white-space: normal;"' }},
            { label: 'Código', name: 'codigo', width: 15, align:'center'},
            { label: '% Retención', name: 'porcentaje', width: 18, align:'center'},
            { label: 'Valor', name: 'precio', width: 15, align:'center',formatter: 'number', formatoptions: { decimalPlaces: 2 } },
            { label: 'V. Retenido', name: 'vretenido', width: 15, align:'center',formatter: 'number', formatoptions: { decimalPlaces: 2 } },
            { label: '<span class="badge bg-green">Acción</span>', name: "acciones", formatter: buttonFormatter, width: 15, align:'center', search: false,
                sortable: false, hidedlg: true, resizable: false, editable: false, viewable: false
            },
        ],
        //sortname: 'CustomerID',
        //sortorder : 'asc',
        viewrecords: true,
        width: 720,
        rownumbers: true,
        height: '100%',
        rowNum: 1000,
        pager: "#pager_editarfactura",
        cellEdit: true,
        cellsubmit: 'clientArray',
        editurl: 'clientArray',
        footerrow: true,
        gridview : false,
        afterInsertRow : function( rowid, rowdata, rawdata) {
            var $self = $(this);
            VALOR = parseFloat($self.jqGrid("getCol", "precio", false, "sum"));
            VALOR_RETENIDO = parseFloat($self.jqGrid("getCol", "vretenido", false, "sum"));
            $self.jqGrid("footerData", "set", {porcentaje:'Total:',precio:VALOR, vretenido:VALOR_RETENIDO});
        },
    });

    function buttonFormatter(){

        new_format_value =  '<a  class="btn btn-danger btn-flat btn-xs" onClick="deleteRow(this)"><i class="fa fa-close"></i> Eliminar</a>';
        //retorna los botones
        return new_format_value

    }//end function buttonFormatter


}//end function grillaFactura
