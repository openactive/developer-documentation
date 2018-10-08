# Structuring Data

## Understanding data fields

**Ensure accurate, structured fields are available** - Although it is possible to include the ageRange in the description field, it is not useful for filtering or displaying to users. Where core structured fields such as `activity`, `ageRange`, `genderRestriction`, difficultly `level` or `image` are not available in the source system, they should be added so they can be used by activity providers.

The [OpenActive data model](https://developer.openactive.io/models) provides a structured basis for constructing JSON objects that represent events, sessions, course, facilities, and more.

This guide includes details about how to use parts of the model that are more nuanced.

## Extension properties

**Publish as much data as possible** - include all events / facilities and all fields related to all events. Data fields which are not yet featured in one of the existing [OpenActive models](https://developer.openactive.io/models) should be included by using extension fields.

\(Explain how extension fields work\)

