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
public class Properties {
    private String description;
    private Boolean hascatch;
    
    public Properties(String description, Boolean hascatch) {
        this.description = description;
        this.hascatch = hascatch;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the hascatch
     */
    public Boolean getHascatch() {
        return hascatch;
    }

    /**
     * @param hascatch the hascatch to set
     */
    public void setHascatch(Boolean hascatch) {
        this.hascatch = hascatch;
    }
}
