StoX GUI as a WEB application.

The backend
StoX is a project-oriented software package for backend modeling. StoX must be able to run offline locally at pc without network.
The backend is originally coded in java in version 2.7 and 3.0, but will be transferred to R (Rstox) in 
version 4.0. For timecritical code like xml parsing, c++ libraries are adapted to read certain structures needed in R. R is a good choice for 
matrix calculation and statistical modeling. The backend service can be presented in a java environment with RServe (https://www.rforge.net/Rserve/), 

Springboot standalone solution 
There is no need for software other than a browser like i.e IE 
Explorer, Chrome or Safari to run the application. The Web solution can be run locally on a computer or centrally against a given server. To achieve this 
SpringBoot can be used to embed Tomcat server standalone without any need for installation of Tomcat. Everything is packed into a single JAR file. 
The Springboot jar file can also serve static HTML pages as resources, so that the entire WEB solution  with server (TOMCAT), Spring at java and HTML, 
CSS and JS is contained in a JAR product. This product can further be jlinked with java 11 technology to be self contained. This means that the end
 user doesnt need to install java JRE or JDK, since the product is “translated” into OS 
spesific binaries.

RSession
For a given StoX project, an R session will be created in java Spring middle tier. 

The frontend
StoX 2.7 frontend (GUI) is originally developed with Netbeans IDE and Netbeans platform using java 8. The installer is built using a maven package nbm-buildinstaller. 
The problem is that it works only with java 8, since Netbeans Platform is now concidered to be a legacy library. Newer and more robust technology for 
frontend can be chosen, i.e Web SpringBoot and/or Electron. 

MVC
Model-View-Controller is an application with a clear separation between frontend and backend. And a controller (middle layer) to serve the incoming HTTP 
calls from the enduser which is used as a REST API for methods in the URL, getting or posting resources forth and back.
The frontend is primarly HTML coding, SCSS and Typescript. HTML for the templates, SCSS for the layout, and Typescript for the controllers. Angular is Google's  
framework for web applications. 

Map / OPENLAYERS
Open Layers (OL library) is based  on javascript and is delivered also through an Angular component. Maps can be served either at Geo servers when online, or 
locale assets statically served in a Spring web app. Open layers is a javascript library for WEB based mapping software. This library can be used at the 
 frontend with adapted behaviour for map dynamics (dragging/clicking/hovering  nodes and polygons). 
 GeoJSON or TopoJson is a suitable format that can replace the role of WKT.



CONTROLLER
And a controller (middle layer) to serve the incoming HTTP calls from the enduser which is used as a REST API for methods in the URL, getting or posting 
resources forth and back.



