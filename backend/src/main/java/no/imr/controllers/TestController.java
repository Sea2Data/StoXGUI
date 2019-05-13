package no.imr.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import no.imr.model.Feature;
import no.imr.model.FeatureCollection;
import no.imr.model.Geometry;
import no.imr.model.Properties;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TestController {
        
        @RequestMapping(value = "/geojson", method = RequestMethod.GET, produces = "application/json")
        public FeatureCollection getGeoJson() {
                      
            FeatureCollection featureCollection = new FeatureCollection();
            
            int iterations = 10000;
            
            for(int i = 0; i < iterations; i++) {
                Feature feature = new Feature(i);
                Double lon = 0 + Math.random() * 10;
                lon = Math.round(lon*10000)/10000.0d;
                Double lat = 55 + Math.random() * 20;
                lat = Math.round(lat*10000)/10000.0d;
                Geometry geometry = new Geometry();
                geometry.addPoints(lon, lat);
                
                Properties prop = new Properties("id_" + i + "_lon_" + lon + "_lat_" + lat, i % 2 == 0);
                
                feature.setGeometry(geometry);
                feature.setProperties(prop);
                featureCollection.addFeature(feature);
            }
        
            return featureCollection;
        }

}