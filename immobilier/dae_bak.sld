<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" version="1.1.0" xmlns:se="http://www.opengis.net/se" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xlink="http://www.w3.org/1999/xlink" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd" xmlns:ogc="http://www.opengis.net/ogc">
  <NamedLayer>
    <se:Name>Grille</se:Name>
    <UserStyle>
      <se:Name>Grille</se:Name>
      <se:FeatureTypeStyle>
        <se:Rule>
          <se:Name>Single symbol</se:Name>
          <se:PointSymbolizer>
            <se:Graphic>
              <se:Mark>
                <se:WellKnownName>square</se:WellKnownName>
                <se:Fill>
                  <se:SvgParameter name="fill">#9fb935</se:SvgParameter>
                </se:Fill>
                
              </se:Mark>
              <se:Size>71</se:Size>
            </se:Graphic>
          </se:PointSymbolizer>
          <se:PointSymbolizer>
            <se:Graphic>
              <se:Mark>
                <se:WellKnownName>ttf://DejaVu Sans#0x2665</se:WellKnownName>
                <se:Fill>
                  <se:SvgParameter name="fill">#fff</se:SvgParameter>
                </se:Fill>   </se:Mark>
              <se:Size>54</se:Size>
            </se:Graphic>
          </se:PointSymbolizer>
          <se:PointSymbolizer>
            <se:Graphic>
              <se:Mark>
                <se:WellKnownName>ttf://DejaVu Sans#0x26a1</se:WellKnownName>
                <se:Fill>
                  <se:SvgParameter name="fill">#9fb935</se:SvgParameter>
                </se:Fill>   </se:Mark>
              <se:Size>36</se:Size>
              <se:Displacement>
                <se:DisplacementX>0</se:DisplacementX>
                <se:DisplacementY>0</se:DisplacementY>
              </se:Displacement>
            </se:Graphic>
          </se:PointSymbolizer>
          <!-- <se:PointSymbolizer> -->
            <!-- <se:Graphic> -->
              <!-- <se:Mark> -->
                <!-- <se:OnlineResource xlink:type="simple" xlink:href="ttf://DejaVu Sans"/> -->
                <!-- <se:Format>ttf</se:Format> -->
                <!-- <se:MarkIndex>68</se:MarkIndex> -->
                <!-- <se:Fill> -->
                  <!-- <se:SvgParameter name="fill">#9fb935</se:SvgParameter> -->
                <!-- </se:Fill> -->
              <!-- </se:Mark> -->
              <!-- <se:Size>18</se:Size> -->
              <!-- <se:Displacement> -->
                <!-- <se:DisplacementX>0</se:DisplacementX> -->
                <!-- <se:DisplacementY>-49</se:DisplacementY> -->
              <!-- </se:Displacement> -->
            <!-- </se:Graphic> -->
          <!-- </se:PointSymbolizer> -->
        </se:Rule>
      </se:FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
