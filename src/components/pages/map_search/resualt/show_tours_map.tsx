import React, {useEffect, useRef} from "react";
import L from "leaflet";

const style = {
    width: "100%",
    height: "100%"
};

const Map = ({markersData, radius, lat, lng}: { markersData: any, radius: any, lat: any, lng: any }) => {

    const mapRef = useRef<any>(null);
    useEffect(() => {
        mapRef.current = L.map("map", {
            center: [lat, lng],
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

    useEffect(() => {
        if (+markersData.lat && +markersData.lng && layerRef.current) {

            console.log("loog", markersData)
        }
        console.log("loog2")

    }, [markersData.lat, markersData.lng]);

    // update markers
    useEffect(() => {
        layerRef.current.clearLayers();
        if ({lng, lat}) L.circle({lng, lat}, {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: radius
        }).addTo(layerRef.current);
        markersData.forEach((marker: any) => {
            L.marker(marker, {title: " marker.title"}).bindPopup('This is Tutorialspoint').openPopup().addTo(layerRef.current);
        });
    }, [markersData]);

    return (<div style={{
        width: "100%",
        height: "300px ",


    }}>
        <div id="map" style={style}/>
    </div>)
}

export default Map;
