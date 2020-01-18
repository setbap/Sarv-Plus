import React, {useEffect, useRef} from "react";
import L from "leaflet";

const style = {
    width: "100%",
    height: "100%"
};

const Map = ({stPoint, dsPoint}: { stPoint: any, dsPoint: any }) => {

    const mapRef = useRef<any>(null);
    useEffect(() => {
        mapRef.current = L.map("map", {
            center: [(stPoint[1] + dsPoint[1]) / 2, (stPoint[0] + dsPoint[0]) / 2],
            zoom: 8,
            layers: [
                L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        });
    }, []);

    // add layer
    const layerRef = useRef<any>(null);
    useEffect(() => {
        layerRef.current = L.layerGroup().addTo(mapRef.current);
    }, []);


    // update markers
    useEffect(() => {
        layerRef.current.clearLayers();

        L.polyline([[stPoint[1], stPoint[0]], [dsPoint[1], dsPoint[0]]], {
            color: 'red',
        }).addTo(layerRef.current);
        L.marker([stPoint[1], stPoint[0]], {title: "نقطه شروع"}).bindPopup('نقطه شروع').openPopup().addTo(layerRef.current);
        L.marker([dsPoint[1], dsPoint[0]], {title: "نقطه پایان"}).bindPopup('نقطه پایان').openPopup().addTo(layerRef.current);

    }, [stPoint[0], stPoint[0], dsPoint[0], dsPoint[1]]);

    return (<div style={{
        width: "100%",
        height: "300px ",


    }}>
        <div id="map" style={style}/>
    </div>)
}

export default Map;
