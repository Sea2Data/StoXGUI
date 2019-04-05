StoX GUI as a WEB application

The backend
StoX is a project-oriented software package for backend modeling. The backend is coded in java in version 2.7 and 3.0, but will be transfer to R (Rstox) in 
version 4.0. For timecritical code like xml parsing, c++ libraries are adapted to read certain structures needed in R. R is probably the best choice for 
matrix-based calculation and statistical modeling. The backend service can be presented in a java environment with RServe techonlogy, that means a R session 
is created for each stox project. All project related code will be in R, that includes to read/write xml files.

The frontend
StoX 2.7 frontend (GUI) is developed with Netbeans IDE and Netbeans platform using java 8. The installer is built using a maven package nbm-buildinstaller. 
The problem is that it works only with java 8, since Netbeans Platform is now concidered to be a legacy framework. Newer and more robust technology for 
frontend has to be chosen, i.e Web or other frameworks like c++ QGis. 
MVC
Model-View-Controller is an application with a clear separation between frontend and backend. And a controller (middle layer) to serve the incoming HTTP 
calls from the enduser which is used as a REST API for methods in the URL, getting or posting resources forth and back.
The frontend is primarly HTML coding, CSS and Javascript. HTML for the elements, CSS for the layout, and Javascript for the dynamics. In addition JQuery, 
Angular and other frameworks like Open Layers (OL library) is based purely on javascript. There is no need for software other than a browser like i.e IE 
Explorer, Chrome or Safari to run the application. The Web solution can be run locally on a computer or centrally against a given server. In the first case, 
it is required that StoX must be available offline locally. To achieve this SpringBoot can be used to embed Tomcat server standalone without any need for 
installation of Tomcat. Everything is packed into a single JAR file. The Springboot jar file can also serve static HTML pages as resources, so that the 
entire WEB solution  with server (TOMCAT), Spring at java and HTML, CSS and JS is contained in a JAR product. This product can further be jlinked with 
java 11 technology to be self contained. This means that the end user doesnt need to install java JRE or JDK, since the product is “translated” into OS 
spesific binaries.

CONTROLLER
And a controller (middle layer) to serve the incoming HTTP calls from the enduser which is used as a REST API for methods in the URL, getting or posting 
resources forth and back.


OPENLAYERS
Open layers is a javascript library for WEB based mapping software. This library can be used at the frontend with adapted behaviour for map dynamics
 (dragging/clicking/hovering  nodes and polygons). GeoJSON or TopoJson is a suitable format that can replace the role of WKT.
