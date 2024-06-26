# Generating the Conformance Certificate

## OpenActive Conformance Certificates <a href="#openactive-conformance-certificates" id="openactive-conformance-certificates"></a>

An OpenActive Conformance Certificate offers a mechanism by which implementing systems can prove their conformance to the OpenActive specifications.

### Example certificate <a href="#example-certificate" id="example-certificate"></a>

An example conformance certificate can be found here: [https://certificates.reference-implementation.openactive.io/examples/all-features/random/](https://certificates.reference-implementation.openactive.io/examples/all-features/random/)

Note that this example is frequently generated for the OpenActive .NET Reference Implementation as part of the CI of the OpenActive Test Suite itself.

### Obtaining a certificate <a href="#obtaining-a-certificate" id="obtaining-a-certificate"></a>

The OpenActive Test Suite can be configured to output a Conformance Certificate upon all tests passing.

This is best achieved as part of a continuous integration script that runs these tests of your UAT environment (or test environment, if you do not have a UAT environment).

A Conformance Certificate is issued to cover a subset of the features of the specifications that are implemented - which are [configured in the test suite](configuring-test-suite.md#step-4-configure-features), and hence only guarantees a complete implementation of that subset.

Certificates are designed to be published frequently, to demonstrate continued conformance, especially as the test suite is improved to test for additional edge cases within the features selected.

To obtain a certificate, simply update your `config/dev.json` with the following:

```json
  "integrationTests": {
    "generateConformanceCertificate": true,
    "conformanceCertificateId": "https://acmebooker.example.com/openactive/certificate",
    // ...
```

The certificate ID is the URL where the certificate will be hosted (see below section), which must match in order for the certificate to be valid.

### Publishing your certificate <a href="#publishing-your-certificate" id="publishing-your-certificate"></a>

This certificate must be hosted somewhere publicly accessible, ideally under the same or subdomain as your dataset site.

Static file hosting such as GitHub pages or an Amazon S3 bucket are both recommended.

Your UAT continuous integration script should upload a fresh certificate upon each successful run of the OpenActive Test Suite.

Upload scripts can be created for e.g. Amazon S3 and GitHub pages.

Note that the certificate is named index.html by default to allow it to be referenced at a path such as [https://acmebooker.example.com/openactive/certificate](https://acmebooker.example.com/openactive/certificate)

The certificate should be linked from your dataset site, to make it easily accessible to integrators in both human and machine-readable forms.

### Certificate self-validation <a href="#certificate-self-validation" id="certificate-self-validation"></a>

When the certificate is opened in a browser, it sends its contents to [https://conformance-certificate-validator.openactive.io/](https://conformance-certificate-validator.openactive.io/), which runs checks to ensure its integrity and that its test coverage matches that of the latest test suite for the features selected.

A valid certificate will look as follows:

<figure><img src="../../.gitbook/assets/valid-cert-screenshot.png" alt=""><figcaption><p>Valid Certificate Screenshot</p></figcaption></figure>

An invalid certificate will display an error message as follows:

<figure><img src="../../.gitbook/assets/invalid-cert-screenshot (1).png" alt=""><figcaption><p>Invalid Certificate Screenshot</p></figcaption></figure>

### Certificate external validation <a href="#certificate-external-validation" id="certificate-external-validation"></a>

External validation is available for integrating services interested in establishing the validity of a certificate.

Simply send a request as follows:

`https://conformance-certificate-validator.openactive.io/validate?url={url}&holder={holder}`

The parameters accepted are:

* `url` - The URL of the conformance certificate
* `holder` - The certified booking services name, which should be taken from bookingService.name (or otherwise publisher.name) within the dataset site - which ensures the certificate is only referenced from relevant system.

### Certificate composition <a href="#certificate-composition" id="certificate-composition"></a>

The certificate is composed of three key elements:

* A human readable HTML page
* An embedded machine-readable JSON-LD snippet
* An embedded zip file of evidence of the test suite results that were used to obtain this certificate, as is [common practice](https://openid.net/certification/).

All three of these components must be coherent and match in order for the certificate to be valid.

The test suite results included as evidence are redacted to remove all domain names from URLs, to ensure the security of your UAT infrastructure.

The evidence zip file can be extracted from the HTML page using the "Download Evidence" button when opening the page in a browser.
