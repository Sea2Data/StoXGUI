/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package no.imr.model;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author esmaelmh
 */
public class FeatureCollection {
    private String type;
    private List<Feature> features;
    
    public FeatureCollection() {
        this.type = "FeatureCollection";
        this.features = new ArrayList<>();
    }
    
    public void addFeature(Feature feature) {
        this.getFeatures().add(feature);
    }

    /**
     * @return the type
     */
    public String getType() {
        return type;
    }

    /**
     * @param type the type to set
     */
    public void setType(String type) {
        this.type = type;
    }

    /**
     * @return the features
     */
    public List<Feature> getFeatures() {
        return features;
    }

    /**
     * @param features the features to set
     */
    public void setFeatures(List<Feature> features) {
        this.features = features;
    }
}
