FROM ghcr.io/khatib-abbas/php:8.1-ubi9-caddy8.4.2-oci8.3 AS test_stream

FROM  ghcr.io/khatib-abbas/xcaddy/php:8.1.1 AS test2_stream
FROM ghcr.io/khatib-abbas/xcaddy/php:8.1.0  AS test3_stream
