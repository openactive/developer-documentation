# \[Get the data\]

## Data Providers and Consumers

There are [many data providers](http://status.openactive.io/) that publish data about activity opportunities using the [Open Active standards](../specifications/specifications-overview.md). \[Each data provider has a specialism. Eg. a leisure centre might publish data about XX facilities; or a small YYYY about ZZZ events; or a personal trainer publishing their AAA sessions. There is even data about walking routes published by BBB\]. Data providers will usually make data available via an API.

\[diagram\]

The aim of the Open Active programme is to encourage publishers to make open data available. However, data providers will have a range of technical capabilities and skills. Not all providers are able to support highly available, highly performant services. Therefore we recommend that data consumers copy data into their own system for combining with other data, optimising and caching. For example, if an app developer is making a searchable directory of several providers' opportunities, they can make the appropriate technical optimisations for searching their own system rather than depend on fast responses from all providers.

## Explore the data using the API dashboard

\[You can use the dashboard feeds to explore the data and see if it meets your needs. But we don't recommend that you rely on these feeds directly as the data source for a live service. Contact the data provider's technical team and seeing what help they can provide to meet your needs.\]

## Data Model and Specifications

\[The example data below and the APIs in the dashboard use objects from the Open Active [data model](../data-model/data-model-overview.md) and formatted according to the Open Active [specifications](../specifications/specifications-overview.md).\]

## Synchronising the data

We recommend that data consumers copy providers' data into their own system for combining with other data, optimising and caching.  An initial database copy will need to be kept up to date and synchronised with providers' changes to the data.

Learn more in this [tutorial](harvesting-opportunity-data.md).

## An example feed

```text

```

\[description of what you can see.eg "This data describes a XXX session at a leisure centre in Birmingham. Note the use of a event type, location and YYY".\]



