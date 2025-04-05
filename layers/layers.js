var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRIStandard_1 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Property_Details_3 = new ol.format.GeoJSON();
var features_Property_Details_3 = format_Property_Details_3.readFeatures(json_Property_Details_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Property_Details_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Property_Details_3.addFeatures(features_Property_Details_3);
var lyr_Property_Details_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Property_Details_3, 
                style: style_Property_Details_3,
                popuplayertitle: 'Property_Details',
                interactive: true,
    title: 'Property_Details<br />\
    <img src="styles/legend/Property_Details_3_0.png" /> Anjuman at Barracks Centre, Nellore Town Lands at Nellore Town<br />\
    <img src="styles/legend/Property_Details_3_1.png" /> Anjuman property, Beside Unani Hospital, Kurnool.<br />\
    <img src="styles/legend/Property_Details_3_2.png" /> Anjuman-E-Shamsia Madrasa, Kurnool City Lands at Kallur (V & M)<br />\
    <img src="styles/legend/Property_Details_3_3.png" /> Ashoorkhana, Piduguralla Town, Palnadu District Lands at Piduguralla (V &M)<br />\
    <img src="styles/legend/Property_Details_3_4.png" /> Bade Panja, Bheemunipatnam (Town & M), Visakhapatnam.<br />\
    <img src="styles/legend/Property_Details_3_5.png" /> Big Mosque situated at Lalapet, Guntur City Lands at Reddypalem (V), Guntur Urban (M)<br />\
    <img src="styles/legend/Property_Details_3_6.png" /> Chowk Masjid, Nandyal Town<br />\
    <img src="styles/legend/Property_Details_3_7.png" /> D.Hzt. Ishaq Madani Aulia, land at Nammi Doddi Junction, Devada, Visakhapatnam.<br />\
    <img src="styles/legend/Property_Details_3_8.png" /> Jamia Masjid, Madanapalli Town, Annamayya District Lands at B.K.Palli (V), Madanapalli (M)<br />\
    <img src="styles/legend/Property_Details_3_9.png" /> Jamia Masjid, Rameshwarampeta, Poddatur, YSR Kadapa.<br />\
    <img src="styles/legend/Property_Details_3_10.png" /> Jamia Mosque at Venkatagiri (V & M), Tirupati District Lands at Venkatagiri (V & M)<br />\
    <img src="styles/legend/Property_Details_3_11.png" /> Khateeb Service Mosque, Gooty<br />\
    <img src="styles/legend/Property_Details_3_12.png" /> Khazi Service Inam lands<br />\
    <img src="styles/legend/Property_Details_3_13.png" /> Khazi Service Inam lands, Kondapalli<br />\
    <img src="styles/legend/Property_Details_3_14.png" /> Mosque, Throvagunta (V), Ongole (M)<br />\
    <img src="styles/legend/Property_Details_3_15.png" /> Nazeer Ahmed Panja, Tangelamudi, Eluru Town & District Lands at Malkipuram (V), enduluru (M)<br />\
    <img src="styles/legend/Property_Details_3_16.png" /> Panja Ashoorkhana,, Dhone (V&M), Nandyal District Lands at Dhone (V&M)<br />\
    <img src="styles/legend/Property_Details_3_17.png" /> Peerla Panja, Government Hospital Road, Ichapuram lands, Srikakulam District.<br />\
    <img src="styles/legend/Property_Details_3_18.png" /> Qilla Jamia Mosque, Tadipatri<br />\
    <img src="styles/legend/Property_Details_3_19.png" /> Sawath Khan Mosque, Kurnool Lands at Kurnool Town<br />\
    <img src="styles/legend/Property_Details_3_20.png" /> <br />' });
var format_Propertyproperty_details_4 = new ol.format.GeoJSON();
var features_Propertyproperty_details_4 = format_Propertyproperty_details_4.readFeatures(json_Propertyproperty_details_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Propertyproperty_details_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Propertyproperty_details_4.addFeatures(features_Propertyproperty_details_4);
var lyr_Propertyproperty_details_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Propertyproperty_details_4, 
                style: style_Propertyproperty_details_4,
                popuplayertitle: 'Property — property_details',
                interactive: true,
                title: 'Property — property_details'
            });
var format_ULBBoundary_5 = new ol.format.GeoJSON();
var features_ULBBoundary_5 = format_ULBBoundary_5.readFeatures(json_ULBBoundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ULBBoundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ULBBoundary_5.addFeatures(features_ULBBoundary_5);
var lyr_ULBBoundary_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ULBBoundary_5, 
                style: style_ULBBoundary_5,
                popuplayertitle: 'ULB Boundary',
                interactive: true,
                title: '<img src="styles/legend/ULBBoundary_5.png" /> ULB Boundary'
            });
var format_DistrictBoundary_6 = new ol.format.GeoJSON();
var features_DistrictBoundary_6 = format_DistrictBoundary_6.readFeatures(json_DistrictBoundary_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistrictBoundary_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictBoundary_6.addFeatures(features_DistrictBoundary_6);
var lyr_DistrictBoundary_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistrictBoundary_6, 
                style: style_DistrictBoundary_6,
                popuplayertitle: 'District Boundary',
                interactive: true,
                title: '<img src="styles/legend/DistrictBoundary_6.png" /> District Boundary'
            });
var format_Dist_Boundary_Details_7 = new ol.format.GeoJSON();
var features_Dist_Boundary_Details_7 = format_Dist_Boundary_Details_7.readFeatures(json_Dist_Boundary_Details_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dist_Boundary_Details_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dist_Boundary_Details_7.addFeatures(features_Dist_Boundary_Details_7);
var lyr_Dist_Boundary_Details_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dist_Boundary_Details_7, 
                style: style_Dist_Boundary_Details_7,
                popuplayertitle: 'Dist_Boundary_Details',
                interactive: true,
                title: '<img src="styles/legend/Dist_Boundary_Details_7.png" /> Dist_Boundary_Details'
            });
var format_APStateBoundary_8 = new ol.format.GeoJSON();
var features_APStateBoundary_8 = format_APStateBoundary_8.readFeatures(json_APStateBoundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_APStateBoundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APStateBoundary_8.addFeatures(features_APStateBoundary_8);
var lyr_APStateBoundary_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APStateBoundary_8, 
                style: style_APStateBoundary_8,
                popuplayertitle: 'AP State Boundary',
                interactive: true,
                title: '<img src="styles/legend/APStateBoundary_8.png" /> AP State Boundary'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ESRIStandard_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_Property_Details_3.setVisible(true);lyr_Propertyproperty_details_4.setVisible(true);lyr_ULBBoundary_5.setVisible(true);lyr_DistrictBoundary_6.setVisible(true);lyr_Dist_Boundary_Details_7.setVisible(true);lyr_APStateBoundary_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ESRIStandard_1,lyr_OSMStandard_2,lyr_Property_Details_3,lyr_Propertyproperty_details_4,lyr_ULBBoundary_5,lyr_DistrictBoundary_6,lyr_Dist_Boundary_Details_7,lyr_APStateBoundary_8];
lyr_Property_Details_3.set('fieldAliases', {'Name': 'Name of The Site', 'Id': 'Id', 'S_No_': 'S_No_', 'Municipali': 'ULB Name', 'Name_of_Si': 'Name Of the Site', 'Area__Ac_': 'Area (Ac)', 'Area_to_be': 'Area to be Developed (Ac)', 'Remarks_of': 'Remarks of Marked Area', 'A': 'A', });
lyr_Propertyproperty_details_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'S_No_': 'S_No_', 'Municipali': 'Municipali', 'Name_of_Si': 'Name_of_Si', 'Area__Ac_': 'Area__Ac_', 'Area_to_be': 'Area_to_be', 'Remarks_of': 'Remarks_of', 'A': 'A', });
lyr_ULBBoundary_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'UN_ID': 'UN_ID', 'Name_ULB': 'Name_ULB', 'Total_ulb': 'Total_ulb', 'No_STP': 'No_STP', 'No_NSTP': 'No_NSTP', 'Status_con': 'Status_con', 'Status_STP': 'Status_STP', 'Total_Pop': 'Total_Pop', 'Total_Cost': 'Total_Cost', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Name': 'Name', 'Area': 'Area(SQ.KM)', });
lyr_DistrictBoundary_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nam': 'nam', 'Dist': 'Dist', 'Area_SKM': 'Area(Sq.Km)', 'Area': 'Area', 'Region': 'Region', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'No_ULB': 'No of ULBs', });
lyr_Dist_Boundary_Details_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'nam': 'nam', 'Dist': 'District Name', 'Area_SKM': 'Area(Sq.Km)', 'Area': 'Area(Sq.Mt)', 'Region': 'Region', 'No_ULB': 'No of ULBs', 'ORIG_FID': 'ORIG_FID', });
lyr_APStateBoundary_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OID_': 'OID_', 'Name': 'Name', 'Ara': 'Area(Sq.Km)', 'No_PC': 'No_PC', 'No_AC': 'No_AC', 'No_ulb': 'No of ULBs', 'T_ulb_pop': 'Total ULB Population(2011)', 'No_Distric': 'No of Districts', 'Population': 'Population', 'Pop_2024': 'Population(2011)', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Property_Details_3.set('fieldImages', {'Name': 'TextEdit', 'Id': 'Range', 'S_No_': 'TextEdit', 'Municipali': 'TextEdit', 'Name_of_Si': 'TextEdit', 'Area__Ac_': 'TextEdit', 'Area_to_be': 'TextEdit', 'Remarks_of': 'TextEdit', 'A': 'TextEdit', });
lyr_Propertyproperty_details_4.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'S_No_': '', 'Municipali': '', 'Name_of_Si': '', 'Area__Ac_': '', 'Area_to_be': '', 'Remarks_of': '', 'A': '', });
lyr_ULBBoundary_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'UN_ID': 'Range', 'Name_ULB': 'TextEdit', 'Total_ulb': 'Range', 'No_STP': 'Range', 'No_NSTP': 'Range', 'Status_con': 'TextEdit', 'Status_STP': 'TextEdit', 'Total_Pop': 'Range', 'Total_Cost': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Name': 'TextEdit', 'Area': 'TextEdit', });
lyr_DistrictBoundary_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'nam': 'TextEdit', 'Dist': 'TextEdit', 'Area_SKM': 'TextEdit', 'Area': 'TextEdit', 'Region': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'No_ULB': 'Range', });
lyr_Dist_Boundary_Details_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'nam': 'TextEdit', 'Dist': 'TextEdit', 'Area_SKM': 'TextEdit', 'Area': 'TextEdit', 'Region': 'TextEdit', 'No_ULB': 'Range', 'ORIG_FID': 'Range', });
lyr_APStateBoundary_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'OID_': 'Range', 'Name': 'TextEdit', 'Ara': 'TextEdit', 'No_PC': 'Range', 'No_AC': 'Range', 'No_ulb': 'Range', 'T_ulb_pop': 'Range', 'No_Distric': 'Range', 'Population': 'TextEdit', 'Pop_2024': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Property_Details_3.set('fieldLabels', {'Name': 'inline label - visible with data', 'Id': 'hidden field', 'S_No_': 'hidden field', 'Municipali': 'inline label - visible with data', 'Name_of_Si': 'hidden field', 'Area__Ac_': 'inline label - visible with data', 'Area_to_be': 'inline label - visible with data', 'Remarks_of': 'header label - visible with data', 'A': 'no label', });
lyr_Propertyproperty_details_4.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'S_No_': 'no label', 'Municipali': 'no label', 'Name_of_Si': 'no label', 'Area__Ac_': 'no label', 'Area_to_be': 'no label', 'Remarks_of': 'no label', 'A': 'no label', });
lyr_ULBBoundary_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'UN_ID': 'hidden field', 'Name_ULB': 'inline label - visible with data', 'Total_ulb': 'inline label - visible with data', 'No_STP': 'hidden field', 'No_NSTP': 'hidden field', 'Status_con': 'hidden field', 'Status_STP': 'hidden field', 'Total_Pop': 'hidden field', 'Total_Cost': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Name': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_DistrictBoundary_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'nam': 'hidden field', 'Dist': 'inline label - visible with data', 'Area_SKM': 'inline label - visible with data', 'Area': 'hidden field', 'Region': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'No_ULB': 'inline label - visible with data', });
lyr_Dist_Boundary_Details_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'nam': 'hidden field', 'Dist': 'inline label - visible with data', 'Area_SKM': 'hidden field', 'Area': 'inline label - visible with data', 'Region': 'inline label - visible with data', 'No_ULB': 'inline label - visible with data', 'ORIG_FID': 'hidden field', });
lyr_APStateBoundary_8.set('fieldLabels', {'OBJECTID': 'hidden field', 'OID_': 'hidden field', 'Name': 'inline label - visible with data', 'Ara': 'inline label - visible with data', 'No_PC': 'hidden field', 'No_AC': 'hidden field', 'No_ulb': 'inline label - visible with data', 'T_ulb_pop': 'inline label - visible with data', 'No_Distric': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Pop_2024': 'inline label - visible with data', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_APStateBoundary_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});