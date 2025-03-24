Query specification:

- name: `urn:fairease.eu:udal:example:weekdays`
- description: *Name of weekdays in different languages*
- parameters:
    * (optional) `lang`: language selection (e.g., *en*, *{en, fr}* )
    * (optional) `format`: *long* (full weekday name, e.g., *Monday*) or *short*
      (abbreviation, e.g., *Mon*)
- result: tabular data with columns
    * `number` &ndash; number from 1 (Monday) to 7 (Sunday)
    * `lang` &ndash; language of the data in the row
    * `name` &ndash; weekday name (when no format is selected or when format is *long*)
    * `short_name` &ndash; abbreviated weekday name (when no format is selected or when format is *short*)

which can return the following result when `lang` is set to *en* and no `format`
is provided:

| number | lang | name      | short_name |
|--------|------|-----------|------------|
| 1      | en   | Monday    | Mon        |
| 2      | en   | Tuesday   | Tue        |
| 3      | en   | Wednesday | Wed        |
| 4      | en   | Thursday  | Thu        |
| 5      | en   | Friday    | Fri        |
| 6      | en   | Saturday  | Sat        |
| 7      | en   | Sunday    | Sun        |
