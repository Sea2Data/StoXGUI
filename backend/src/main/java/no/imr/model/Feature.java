/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package no.imr.model;

/**
 *
 * @author esmaelmh
 */
public class Feature {
    private String type;
    private Integer id;
    private Geometry geometry;
    private Properties properties;

    public Feature(Integer id) {
        this.type = "Feature";
        this.id = id;
    }
    
    public void setGeometry(Geometry geometry) {
        this.geometry = geometry;
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
     * @return the id
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * @return the geometry
     */
    public Geometry getGeometry() {
        return geometry;
    }

    /**
     * @return the properties
     */
    public Properties getProperties() {
        return properties;
    }

    /**
     * @param properties the properties to set
     */
    public void setProperties(Properties properties) {
        this.properties = properties;
    }
}
