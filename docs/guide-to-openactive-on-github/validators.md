---
description: Code for validators and the models that drive them.
---

# Validators

Validators are used to ensure that published data conforms to OpenActive standards. Note the overall structure of the codebase: a lightweight validator framework that parses the data fed to it and validates it against whatever model files are provided to it.

* \*\*\*\*[**data-model-validator**](https://github.com/openactive/data-model-validator)**:** The core OpenActive data model validator library.
* \*\*\*\*[**data-models**](https://github.com/openactive/data-models)**:** The models used by the validator to check conformity. Currently restricted to [Opportunity](https://www.openactive.io/modelling-opportunity-data/) models.
* [**rpde-validator**](https://github.com/openactive/rpde-validator)**:**  RPDE validator library
* \*\*\*\*[**data-model-validator-site**](https://github.com/openactive/data-model-validator-site)**:** Simple web front-end into which the validator may be embedded to provide a simple-to-use UI.
* \*\*\*\*[**validator-embed-mvp**](https://github.com/openactive/validator-embed-mvp)**:** First pass at the data-model-validator site.
* \*\*\*\*[**validator-test-json**](https://github.com/openactive/validator-test-json)**:** JSON files for use in testing the validator.

\*\*\*\*

