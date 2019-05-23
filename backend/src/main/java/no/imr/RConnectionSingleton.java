package no.imr;


import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.rosuda.REngine.Rserve.RConnection;
import org.rosuda.REngine.Rserve.RserveException;

/**
 *
 * @author esmaelmh
 */
public class RConnectionSingleton {
    
    private RConnection rconnection; 
    
    private static RConnectionSingleton instance;
    
    private RConnectionSingleton() {
        try {
            String pathToR = "R";
            String cmd = pathToR + " -e " + "\"library(Rserve);Rserve(port=6311)\"";                      
            Runtime.getRuntime().exec(cmd);
            rconnection = new RConnection();
        } catch (RserveException | IOException  ex) {
            Logger.getLogger(RConnectionSingleton.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public RConnection getRConnection() {
        return rconnection;
    }

    public static synchronized RConnectionSingleton getInstance() {
        if(instance == null){
            instance = new RConnectionSingleton();
        }
        return instance;    
    }
}
