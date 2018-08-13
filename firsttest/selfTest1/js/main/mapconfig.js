/*--地图初始配置信息--*/
function MapConfig(){}
MapConfig.mapInitParams = {
    fullExtent:{
        XMin: -179.99999,
        YMin: -89.99999,
        XMax: 179.99999,
        YMax: 89.99999,
    },
    extent:{
        xmin: 117.6064432804,
        ymin: 38.9542275766001,
        xmax: 117.7439106236,
        ymax: 39.0347751514001,
    },
    spatialRerence:{
        wkid: 4326
    }
};
MapConfig.imgMap = {
    Url:"http://server.arcgisonline.com/arcgis/rest/services/ESRI_StreetMap_World_2D/MapServer",
    LabelUrl:"",
    type:1
};