import { Component, OnInit } from '@angular/core';

import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import VectorSource from 'ol/source/Vector';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';
import TopoJSON from 'ol/format/TopoJSON';
import GeoJSON from 'ol/format/GeoJSON';
import {Vector as VectorLayer} from 'ol/layer';
import { DoCheck } from '@angular/core';

import { fromLonLat } from 'ol/proj';
import { Fill, Stroke, Style } from 'ol/style';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  map: OlMap;
  // source: OlXYZ;
  // toposource: VectorSource;
  // layer: OlTileLayer;
  vector: VectorLayer;
  view: OlView;

  ngOnInit() {
    /*this.source = new OlXYZ({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });*/

    var style = new Style({
      fill: new Fill({
        color: 'rgb(255, 255, 255)'
      }),
      stroke: new Stroke({
        color: 'rgb(210, 236, 249)',
        width: 1
      })
    });
    this.vector = new VectorLayer({
      source: new VectorSource({
        url: 'assets/world-110m.1.json',
        format: new TopoJSON({
          // don't want to render the full world polygon (stored as 'land' layer),
          // which repeats all countries
          layers: ['europe']
        }),
        overlaps: false
      }),
      style: style
    });


    /*this.layer = new OlTileLayer({
      source: this.source
    });*/

    this.view = new OlView({
      center: fromLonLat([6.661594, 50.433237]),
      zoom: 3
    });

    this.map = new OlMap({
      target: 'map',
      layers: [this.vector],
      view: this.view
    });
  }

}
/*
convert text delimited file with wkt geometry to arced topojson file
Use QGIS/MapShaper
1. add layer->add delimited text layer.
2. rightclick layer->export->save features as. choose Esri Shape file
MapShaper
Read shape file into https://mapshaper.org/
export as geojson or topojson.
*/
