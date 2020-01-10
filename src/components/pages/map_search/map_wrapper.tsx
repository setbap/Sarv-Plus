import React, {useEffect, useRef} from "react";
import L from "leaflet";

const style = {
    width: "100%",
    height: "100%"
};

const Map = ({markersData, adder}: { markersData: any, adder: any }) => {

    const mapRef = useRef<any>(null);
    useEffect(() => {
        mapRef.current = L.map("map", {
            center: [49.8419, 24.0315],
            zoom: 16,
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

    useEffect(() => {
        if (+markersData.lat && +markersData.lng && layerRef.current) {

            console.log("loog", markersData)
        }
        console.log("loog2")

    }, [markersData.lat, markersData.lng]);


    const addMarker = (e: any) => {
        // Add marker to map at click location; add popup window
        // var newMarker = new L.marker(e.latlng).addTo(mapRef.current);

        adder(e);
    };

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.on("click", addMarker);
        }
    }, [mapRef]);

    // update markers
    useEffect(() => {
        layerRef.current.clearLayers();
        if (+markersData.distant) L.circle(markersData, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: markersData.distant
        }).addTo(layerRef.current);
        L.marker(markersData, {title: "markersData.title"}).bindPopup('محدوده مکان شروع').openPopup().addTo(layerRef.current);

    }, [markersData]);

    return (<div style={{
        width: "100%",
        height: "300px ",


    }}>
        <div id="map" style={style}/>
    </div>)
}

export default Map;
