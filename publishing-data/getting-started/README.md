# Getting Started

## Must Read: Principles of Publishing

There are three key principles to publishing via OpenActive which must be adhered to:

1. **Publish live data from source** - data must be published live, and from a source system that is actively updated directly by the activity provider. Annually updated spreadsheets of activities are not considered useful by the OpenActive community.
2. **Publish as much data as possible** - include all events / facilities and all fields related to all events. Data fields which are not yet featured in one of the existing [OpenActive models](https://developer.openactive.io/models) should be included by using extension fields.
3. **Ensure accurate, structured fields are available** - Although it is possible to include the ageRange in the description field, it is not useful for filtering or displaying to users. Where core structured fields such as `activity`, `ageRange`, `genderRestriction`, difficultly `level` or `image` are not available in the source system, they should be added so they can be used by activity providers.

## Open Standards for you

All of the standards described in these docs have been developed by the OpenActive W3C Community Group - and we very much welcome you to join, and welcome your input.

## Publishing Steps

If you have a bespoke booking or listing system which has been design for a single organisation, start here:

{% page-ref page="bespoke-systems.md" %}

If you have a multi-customer booking or listing systems, which may also include a multi-tenancy environments, start here:

{% page-ref page="multi-customer-systems.md" %}

