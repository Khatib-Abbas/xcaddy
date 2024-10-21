FROM ghcr.io/khatib-abbas/php:8.1-ubi9-caddy8.4.2-oci8.3 AS test_stream

FROM ghcr.io/khatib-abbas/php:8.1.1 AS test2_stream
FROM ghcr.io/khatib-abbas/php:8.1.1  AS test3_stream
FROM ghcr.io/khatib-abbas/8.1-ubi9-caddy8.4.8-oci8.3.1 AS test5_stream
