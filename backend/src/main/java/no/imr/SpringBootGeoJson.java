package no.imr;

import java.awt.Desktop;
import java.net.URL;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = no.imr.controllers.TestController.class)
public class SpringBootGeoJson {

    public static void main(String[] args) {
        System.setProperty("java.awt.headless", "false"); // will change headless toolkit to sun.awt.windows.WToolkit           
        // Show splash
        SpringApplication.run(SpringBootGeoJson.class, args);
        openHomePage();
    }

    private static void openHomePage() {
        try {
//            URI homepage = new URI();
            //System.out.println(Toolkit.getDefaultToolkit());
            if (Desktop.isDesktopSupported()) {
                Desktop.getDesktop().browse(new URL("http://localhost:8080/geojson").toURI());
            }

            //Runtime rt = Runtime.getRuntime();
            //rt.exec("http://localhost:8080/geojson");
        } catch (Throwable e) {
            e.printStackTrace();
        }
    }
}
