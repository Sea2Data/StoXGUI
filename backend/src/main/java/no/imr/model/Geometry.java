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
public class Geometry {
    private String type;
    private List<Double> coordinates;
    
    public Geometry() {
        this.type = "Point";
        this.coordinates = new ArrayList<>();
    }
    
    public void addPoints(Double lon, Double lat) {
        this.getCoordinates().add(lon);
        this.getCoordinates().add(lat);
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
     * @return the coordinates
     */
    public List<Double> getCoordinates() {
        return coordinates;
    }

    /**
     * @param coordinates the coordinates to set
     */
    public void setCoordinates(List<Double> coordinates) {
        this.coordinates = coordinates;
    }
}
