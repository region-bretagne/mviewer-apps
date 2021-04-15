<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor version="1.0.0"
  xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd"
  xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <Name>rb:lycee</Name>
    <UserStyle>
      <Name>rb:lycee</Name>
      <FeatureTypeStyle>
        <Rule>
          <Name>Prive</Name>
          <Title>Lycée privé</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>secteur_li</ogc:PropertyName>
              <ogc:Literal>Privé sous contrat avec l'éducation nationale</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://kartenn.region-bretagne.fr/doc/icons_region/lycee_prive.svg"/>
                  <Format>image/svg</Format>
              </ExternalGraphic>
             <Size>20</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>Public</Name>
          <Title>Lycée public</Title>
          <ogc:Filter>
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>secteur_li</ogc:PropertyName>
              <ogc:Literal>Public</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PointSymbolizer>
            <Graphic>
              <ExternalGraphic>
                <OnlineResource xmlns:xlink="http://www.w3.org/1999/xlink" xlink:type="simple" xlink:href="https://kartenn.region-bretagne.fr/doc/icons_region/lycee.svg"/>
                  <Format>image/svg</Format>
              </ExternalGraphic>
             <Size>20</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
