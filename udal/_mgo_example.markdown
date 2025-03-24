Query specification:

- name: `urn:embrc.eu:emobon:observatory-overview`
- description: *All EMO-BON observatories & associated metadata*
- parameters: 
    * (optional) `ID`: observatory ID selection (e.g., *BPNS* )
    * (optional) `type`: type of observatory (*water*, *sediment* or *hard*)
- result: tabular data with columns
    * `observatory` &ndash; indexnumber
    * `URI` &ndash; URI of the observatory
    * `name` &ndash; name of the observatory
    * `type` &ndash; type of observatory
    * `country` &ndash; country of the observatory
    * `location` &ndash; geographical coordinates of the observatory
    * `MR-id` &ndash; URI of the marine region(s) where the observatory is located
    * `MR-name` &ndash; name of the marine region(s) where the observatory is located
    * `broad-biome` &ndash; broad biome(s) associated with the observatory
    * `local-biome` &ndash; local biome(s) assocaited with the observatory
    * `mixs-terms` &ndash; MIxS term(s) associated with the observatory

which can return the following result when `ID` is set to *BPNS* and `type` to sediment:

| observatory | URI | name      | type | country | location | MR-id | MR-name | broad-biome | local-biome | mixs-terms |
|-------------|-----|-----------|------|---------|----------|-------|---------|------------|-------------|------------|
| 1           | http://data.emobon.embrc.eu/observatory-bpns-crate/sediment/observatory/BPNS | BPNS | sediment | Belgium | (51.433331 2.808331) | http://marineregions.org/mrgid/1912; http://marineregions.org/mrgid/2350; http://marineregions.org/mrgid/26567 | North Atlantic Ocean; North Sea; Belgian part of the North Sea | marine biome [ENVO:00000447]; marine benthic biome[ENVO_01000024] | shallow_marine_sediment_[ENVO:03000034] | sediment |
